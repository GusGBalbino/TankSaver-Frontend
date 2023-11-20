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
    const [postoId, setPostoId] = useState('');
    const [postoName, setPostoNome] = useState('');

    useEffect(() => {
        const storedPostoId = localStorage.getItem('postoId');
        const storedPostoName = localStorage.getItem('postoName');
        console.log('Stored Posto ID:', storedPostoId);
        // console.log('Stored Posto Name:', storedPostoName);
        if (storedPostoId && storedPostoName) {
            
            setPostoId(storedPostoId);
            setPostoNome(storedPostoName);
        }
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [comprasResponse, combustiveisResponse ] = await Promise.all([
                    axios.get(`/compra/${postoId}/comprasPorPosto/`),
                    axios.get('/tipoDeCombustivel/'),
                ]);

                const vendas = comprasResponse.data;
                const combustiveis = combustiveisResponse.data;

                const combustiveisMap = combustiveis.reduce((acc, curr) => {
                    acc[curr.id] = curr.tipo_combustivel;
                    return acc;
                }, {});

                const comprasComNomes = vendas.map(venda => ({
                    ...venda,
                    nome_combustivel: combustiveisMap[venda.tipo_combustivel] || 'Desconhecido',
                }));

                setDadosCompra(comprasComNomes);
            } catch (error) {
                console.error('Erro ao obter dados de venda:', error);
            }
        };

        if (postoId) {
            fetchData();
        }
    }, [postoId]);


    const getNomeCombustivelById = async (id) => {
        try {
            const response = await axios.get(`/tipoDeCombustivel/${id}/`);
            return response.data.tipo_combustivel;
        } catch (error) {
            console.error('Erro ao obter nome do combustível:', error);
            return 'Desconhecido';
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

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/compra/${id}`);
            const resposta = await axios.get('/compra/');
            setDadosCompra(resposta.data);
        } catch (error) {
            console.error('Erro ao excluir funcionário:', error);
        }
    };
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
