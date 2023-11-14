import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalFooter,
    FormControl,
    useDisclosure,
    FormLabel,
    Input,
} from '@chakra-ui/react';

export function AlterarResponsavel() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [postoName, setPostoNome] = useState('');
    const [postoId, setPostoId] = useState('');
    const [telefoneFormatado, setTelefoneFormatado] = useState('');

    const formatarTelefone = (value) => {
        const numericValue = value.replace(/\D/g, '');

        const match = numericValue.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);
        if (match) {
            const formattedValue = match.slice(1).filter(Boolean).join('');
            if (formattedValue.length <= 2) {
                setTelefoneFormatado(`(${formattedValue}`);
            } else if (formattedValue.length <= 7) {
                setTelefoneFormatado(`(${formattedValue.slice(0, 2)}) ${formattedValue.slice(2)}`);
            } else {
                setTelefoneFormatado(`(${formattedValue.slice(0, 2)}) ${formattedValue.slice(2, 7)}-${formattedValue.slice(7)}`);
            }
        }
    };

    const handleChangeTelefone = (event) => {
        formatarTelefone(event.target.value);
    };

    const formatarCPF = (value) => {
        const numericValue = value.replace(/\D/g, '');

        const match = numericValue.match(/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})$/);
        if (match) {
            const formattedValue = match.slice(1, 4).filter(Boolean).join('.');
            setCpf(`${formattedValue}-${match[4] || ''}`);
        }
    };

    const handleChangeCPF = (event) => {
        formatarCPF(event.target.value);
    };

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



    const adicionarResponsavel = async () => {
        const token = localStorage.getItem('token');
        console.log('Token:', token);
        console.log('Request Data:', { nome, cpf, email, telefoneFormatado, posto: postoId });

        try {
            const response = await axios.post('/responsavel/', {
                nome, cpf, email, telefoneFormatado, posto: postoId
            });
            console.log('Responsável adicionado com sucesso:', response.data);
        } catch (error) {
            console.error('Erro ao adicionar responsável:', error);
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
                onClick={onOpen}>
                Cadastrar
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    <ModalHeader>Cadastro de responsável</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Nome</FormLabel>
                            <Input onChange={(e) => setNome(e.target.value)} marginBottom={'15px'} variant='filled' />

                            <FormLabel>CPF</FormLabel>
                            <Input
                                value={cpf}
                                onChange={handleChangeCPF}
                                marginBottom={'15px'}
                                variant='filled'
                            />

                            <FormLabel>Email</FormLabel>
                            <Input onChange={(e) => setEmail(e.target.value)} marginBottom={'15px'} variant='filled' />

                            <FormLabel>Telefone</FormLabel>
                            <Input
                                value={telefoneFormatado}
                                onChange={handleChangeTelefone}
                                marginBottom={'15px'}
                                variant='filled'
                            />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={adicionarResponsavel}>
                            Salvar
                        </Button>
                        <Button onClick={onClose}>Cancelar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
