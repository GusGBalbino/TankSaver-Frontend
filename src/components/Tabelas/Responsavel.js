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


function TabelaResponsavel() {
    const [dadosResponsavel, setDadosResponsavel] = useState([]);
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

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/responsavel/${postoId}/dadosPerfil`);
            const resposta = await axios.get(`/responsavel/${postoId}/dadosPerfil`);
            setDadosResponsavel(resposta.data);
        } catch (error) {
            console.error('Erro ao excluir responsável:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resposta = await axios.get(`/responsavel/${postoId}/dadosPerfil`);
                setDadosResponsavel(resposta.data);
            } catch (error) {
                console.error('Erro ao obter dados de responsável:', error);
            }
        };

        if (postoId) {
            fetchData();
        }
    }, [postoId]);



    return (
        <TableContainer alignItems={'center'} w={'70vw'} marginX="auto">
            <Heading size={'md'} marginTop={'3rem'} marginBottom={'0.5rem'}>Responsável</Heading>
            <Table size='sm' bg={'whiteAlpha.700'} borderRadius={'10px'} >
                <Thead >
                    <Tr>
                        <Th fontSize={'sm'} color={'#131328'}>Nome</Th>
                        <Th fontSize={'sm'} color={'#131328'}>CPF</Th>
                        <Th fontSize={'sm'} color={'#131328'}>Email</Th>
                        <Th fontSize={'sm'} color={'#131328'}>Telefone</Th>
                    </Tr>
                </Thead>

                <Tbody>
                    {/* {dadosResponsavel.map((responsavel) => ( */}
                        <Tr key={dadosResponsavel.id}>
                            <Td>{dadosResponsavel.nome}</Td>
                            <Td>{dadosResponsavel.cpf}</Td>
                            <Td >{dadosResponsavel.email}</Td>
                            <Td >{dadosResponsavel.telefone}</Td>
                            <Td textAlign={'right'}>
                                <DeleteIcon
                                    color="red.500"
                                    cursor="pointer"
                                    onClick={() => handleDelete(dadosResponsavel.id)}
                                />
                            </Td>
                        </Tr>
                    {/* ))} */}
                </Tbody>

            </Table>
        </TableContainer>

    );
}

export default TabelaResponsavel;
