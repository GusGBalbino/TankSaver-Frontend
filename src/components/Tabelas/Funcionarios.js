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


function TabelaFuncionarios() {
    const [dadosCustos, setDadosCustos] = useState([]);
    const [dadosFuncionarios, setDadosFuncionarios] = useState([]);
    
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
            await axios.delete(`localhost:8000/funcionario/${id}`);
            const resposta = await axios.get('localhost:8000/funcionario/');
            setDadosFuncionarios(resposta.data);
        } catch (error) {
            console.error('Erro ao excluir funcionário:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resposta = await axios.get(`localhost:8000/funcionario/${postoId}/funcionariosPorPosto/`);
                setDadosFuncionarios(resposta.data);
            } catch (error) {
                console.error('Erro ao obter dados de funcionários:', error);
            }
        };

        if (postoId) {
            fetchData();
        }
    }, [postoId]);




    return (
        <TableContainer alignItems={'center'} w={'70vw'} marginX="auto">
            <Heading size={'md'} marginTop={'3rem'} marginBottom={'0.5rem'}>Funcionários</Heading>
            <Table size='sm' bg={'whiteAlpha.700'} borderRadius={'10px'} >
                <Thead >
                    <Tr>
                        <Th fontSize={'sm'} color={'#131328'}>Nome</Th>
                        <Th fontSize={'sm'} color={'#131328'}>Cargo</Th>
                        <Th fontSize={'sm'} color={'#131328'}>Salário</Th>
                    </Tr>
                </Thead>

                <Tbody>
                    {dadosFuncionarios.map((funcionario) => (
                        <Tr key={funcionario.id}>
                            <Td>{funcionario.nome}</Td>
                            <Td>{funcionario.cargo}</Td>
                            <Td >R$ {funcionario.total_folha}</Td>
                            <Td textAlign={'right'}>
                                <DeleteIcon
                                    color="red.500"
                                    cursor="pointer"
                                    onClick={() => handleDelete(funcionario.id)}
                                />
                            </Td>
                        </Tr>
                    ))}
                </Tbody>

            </Table>
        </TableContainer>

    );
}

export default TabelaFuncionarios;
