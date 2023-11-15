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

    const handleDelete = async (id) => {
        try {
            // Faça uma requisição DELETE para o endpoint adequado
            await axios.delete(`/funcionario/${id}`);
            // Atualize os dados após a exclusão
            const resposta = await axios.get('/funcionario/');
            setDadosFuncionarios(resposta.data);
        } catch (error) {
            console.error('Erro ao excluir funcionário:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resposta = await axios.get('/funcionario/'); // Ajuste o URL conforme necessário
                setDadosFuncionarios(resposta.data);
            } catch (error) {
                console.error('Erro ao obter dados de funcionários:', error);
            }
        };

        fetchData();
    }, []);



    return (
        <TableContainer alignItems={'center'} w={'50vw'} marginX="auto">
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
