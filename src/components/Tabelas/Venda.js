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


function TabelaVenda() {
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

    const getNomePagamentoById = async (id) => {
        try {
            const response = await axios.get(`/tipoDePagamento/${id}/`);
            return response.data.tipo_pagamento;
        } catch (error) {
            console.error('Erro ao obter o tipo do pagamento:', error);
            return 'Desconhecido';
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/venda/${id}`);
            const resposta = await axios.get('/venda/');
            setDadosCompra(resposta.data);
        } catch (error) {
            console.error('Erro ao excluir funcionário:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resposta = await axios.get('/venda/');
                const compras = resposta.data;
    
                const comprasComNomes = await Promise.all(
                    compras.map(async (venda) => {
                        const nomeCombustivel = await getNomeCombustivelById(venda.tipo_combustivel);
                        const nomePagamento = await getNomePagamentoById(venda.tipo_pagamento);
                        return { ...venda, nome_combustivel: nomeCombustivel, nome_pagamento: nomePagamento };
                    })
                );
    
                setDadosCompra(comprasComNomes);
            } catch (error) {
                console.error('Erro ao obter dados de venda:', error);
            }
        };
    
        fetchData();
    }, []);



    return (
        <TableContainer alignItems={'center'} w={'70vw'} marginX="auto">
            <Heading size={'md'} marginTop={'3rem'} marginBottom={'0.5rem'}>Venda de Combustível</Heading>
            <Table size='sm' bg={'whiteAlpha.700'} borderRadius={'10px'} >
                <Thead >
                    <Tr>
                        <Th fontSize={'sm'} color={'#131328'}>Tipo de combustível</Th>
                        <Th fontSize={'sm'} color={'#131328'}>Tipo de pagamento</Th>
                        <Th fontSize={'sm'} color={'#131328'}>Volume (Litro)</Th>
                        <Th fontSize={'sm'} color={'#131328'}>Valor (Litro)</Th>
                        <Th fontSize={'sm'} color={'#131328'}>Data</Th>

                    </Tr>
                </Thead>

                <Tbody>
                    {dadosCompra.map((venda) => (
                        <Tr key={venda.id}>
                            <Td>{venda.nome_combustivel ? venda.nome_combustivel : 'Nome do Combustível Indisponível'}</Td>
                            <Td>{venda.nome_pagamento ? venda.nome_pagamento : 'Nome do pagamento Indisponível'}</Td>
                            <Td>{venda.volume_venda}</Td>
                            <Td >R$ {venda.preco_litro}</Td>
                            <Td>{venda.data_venda}</Td>

                            <Td textAlign={'right'}>
                                <DeleteIcon
                                    color="red.500"
                                    cursor="pointer"
                                    onClick={() => handleDelete(venda.id)}
                                />
                            </Td>
                        </Tr>
                    ))}
                </Tbody>

            </Table>
        </TableContainer>

    );
}

export default TabelaVenda;
