import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    FormControl,
    useDisclosure,
    ModalOverlay,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    NumberInput,
    NumberInputField
} from '@chakra-ui/react';

axios.defaults.baseURL = "http://localhost:8000";

export function CadastrarFuncionario() {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [totalFolha, setTotalFolha] = useState(0);
    const [postoId, setPostoId] = useState('');
    const [postoName, setPostoNome] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        const storedPostoId = localStorage.getItem('postoId');
        const storedPostoName = localStorage.getItem('postoName');
        console.log('Stored Posto ID:', storedPostoId);
        console.log('Stored Posto Name:', storedPostoName);
        if (storedPostoId && storedPostoName) {
            setPostoId(storedPostoId);
            setPostoNome(storedPostoName);
        }
    }, []);

    const adicionarFuncionario = async () => {
        const token = localStorage.getItem('token');
        console.log('Token:', token);
        console.log('Request Data:', { nome, cargo, totalFolha, posto: postoId });

        try {
            const response = await axios.post('/funcionario/', {
                nome, cargo, total_folha: totalFolha, posto: postoId
            });
            console.log('Funcionário criado com sucesso:', response.data);
        } catch (error) {
            console.error('Erro ao adicionar funcionário:', error);
            console.log('Erro na resposta:', error.response);
        }
    };

    return (
        <>
            <Button
                minW={['10rem', '10rem']}
                maxW={['10rem', '10rem']}
                marginBottom={'15px'}
                variant='outline'
                textColor={'black'}
                borderColor={'#131328'}
                _hover={{ bg: '#FFBB0D', textColor: '#131328', borderColor: '#131328' }}
                onClick={onOpen}
            >
                Cadastrar
            </Button>
            <Modal
                initialFocusRef={null}
                finalFocusRef={null}
                isOpen={isOpen}
                onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Cadastro de funcionário</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>

                            <FormLabel>Nome</FormLabel>
                            <Input
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                marginBottom={'15px'}
                                variant='filled'/>

                            <FormLabel>Cargo</FormLabel>
                            <Input
                                value={cargo}
                                onChange={(e) => setCargo(e.target.value)}
                                marginBottom={'15px'}
                                variant='filled' />

                            <FormLabel>Salário Bruto</FormLabel>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    children='R$'/>
                                <Input 
                                bg={'gray.100'}  
                                onChange={(e) => setTotalFolha(e.target.value)} />
                            </InputGroup>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={adicionarFuncionario} colorScheme='blue' mr={3}>
                            Salvar
                        </Button>
                        <Button onClick={onClose}>Cancelar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
