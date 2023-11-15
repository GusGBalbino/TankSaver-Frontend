import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Heading,
    TableContainer,
    Table,
    Th,
    Td,
    Tr,
    Thead,
    Tbody,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';


function TabelaCompra() {
    const [dadosCompra, setDadosCompra] = useState([]);

    const getNomeCombustivelById = async (id) => {
        try {
            const response = await axios.get(`/tipoDeCombustivel/${id}/`);
            return response.data.tipo_combustivel;
        } catch (error) {
            console.error('Erro ao obter nome do combustível:', error);
            return 'Desconhecido';
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/compra/${id}`);
            const resposta = await axios.get('/compra/');
            setDadosCompra(resposta.data);
        } catch (error) {
            console.error('Erro ao excluir funcionário:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resposta = await axios.get('/compra/');
                const compras = resposta.data;
    
                const comprasComNomes = await Promise.all(
                    compras.map(async (compra) => {
                        const nomeCombustivel = await getNomeCombustivelById(compra.tipo_combustivel);
                        return { ...compra, nome_combustivel: nomeCombustivel };
                    })
                );
    
                setDadosCompra(comprasComNomes);
            } catch (error) {
                console.error('Erro ao obter dados de compra:', error);
            }
        };
    
        fetchData();
    }, []);

    return (
        <TableContainer alignItems={'center'} w={'70vw'} marginX="auto">
            <Heading size={'md'} marginTop={'3rem'} marginBottom={'0.5rem'}>Compra de Combustível</Heading>
            <Table size='sm' bg={'whiteAlpha.700'} borderRadius={'10px'} >
                <Thead >
                    <Tr>
                        <Th fontSize={'sm'} color={'#131328'}>Tipo de combustível</Th>
                        <Th fontSize={'sm'} color={'#131328'}>Volume (Litro)</Th>
                        <Th fontSize={'sm'} color={'#131328'}>Valor (Litro)</Th>
                        <Th fontSize={'sm'} color={'#131328'}>Data</Th>

                    </Tr>
                </Thead>

                <Tbody>
                    {dadosCompra.map((compra) => (
                        <Tr key={compra.id}>
                            <Td>{compra.nome_combustivel ? compra.nome_combustivel : 'Nome Combustível Indisponível'}</Td>
                            <Td>{compra.volume_compra}</Td>
                            <Td >R$ {compra.preco_litro}</Td>
                            <Td>{compra.data_compra}</Td>

                            <Td textAlign={'right'}>
                                <DeleteIcon
                                    color="red.500"
                                    cursor="pointer"
                                    onClick={() => handleDelete(compra.id)}
                                />
                            </Td>
                        </Tr>
                    ))}
                </Tbody>

            </Table>
        </TableContainer>

    );
}

export default TabelaCompra;
