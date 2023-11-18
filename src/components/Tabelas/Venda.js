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
    const [dadosVenda, setDadosvenda] = useState([]);

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
                console.log('postoId antes da chamada da rota:', postoId);
                const [vendasResponse, combustiveisResponse, pagamentosResponse] = await Promise.all([
                    axios.get(`/venda/${postoId}/vendasPorPosto`),
                    axios.get('/tipoDeCombustivel/'),
                    axios.get('/tipoDePagamento/')
                ]);
                const vendas = vendasResponse.data;
                const combustiveis = combustiveisResponse.data;
                const pagamentos = pagamentosResponse.data;

                const combustiveisMap = combustiveis.reduce((acc, curr) => {
                    acc[curr.id] = curr.tipo_combustivel;
                    return acc;
                }, {});

                const pagamentosMap = pagamentos.reduce((acc, curr) => {
                    acc[curr.id] = curr.tipo_pagamento;
                    return acc;
                }, {});

                const comprasComNomes = vendas.map(venda => ({
                    ...venda,
                    nome_combustivel: combustiveisMap[venda.tipo_combustivel] || 'Desconhecido',
                    nome_pagamento: pagamentosMap[venda.tipo_pagamento] || 'Desconhecido'
                }));

                setDadosvenda(comprasComNomes);
            } catch (error) {
                console.error('Erro ao obter dados de venda:', error);
            }
        };
        if (postoId) {
            fetchData();
        }
    }, [postoId]);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/venda/${id}`);
            const resposta = await axios.get('/venda/');
            setDadosvenda(resposta.data);
        } catch (error) {
            console.error('Erro ao excluir funcionário:', error);
        }
    };

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
                    {dadosVenda.map((venda) => (
                        <Tr key={venda.id}>
                            <Td>{venda.nome_combustivel}</Td>
                            <Td>{venda.nome_pagamento}</Td>
                            <Td>{venda.volume_venda}</Td>
                            <Td>R$ {venda.preco_litro}</Td>
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
