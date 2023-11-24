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
    ModalOverlay,
    Input,
    useToast
} from '@chakra-ui/react';

axios.defaults.baseURL = "http://localhost:8000/";


export function AlterarResponsavel() {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    const [postoId, setPostoId] = useState('');
    const [postoName, setPostoNome] = useState('');

    const toast = useToast();

    useEffect(() => {
        const storedPostoId = localStorage.getItem('postoId');
        const storedPostoName = localStorage.getItem('postoName');
        // console.log('Stored Posto ID:', storedPostoId);
        // console.log('Stored Posto Name:', storedPostoName);
        if (storedPostoId && storedPostoName) {
            setPostoId(storedPostoId);
            setPostoNome(storedPostoName);
        }
    }, []);


    const formatarTelefone = (value) => {
        const numericValue = value.replace(/\D/g, '');

        const match = numericValue.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);
        if (match) {
            const formattedValue = match.slice(1).filter(Boolean).join('');
            if (formattedValue.length <= 2) {
                setTelefone(`(${formattedValue}`);
            } else if (formattedValue.length <= 7) {
                setTelefone(`(${formattedValue.slice(0, 2)}) ${formattedValue.slice(2)}`);
            } else {
                setTelefone(`(${formattedValue.slice(0, 2)}) ${formattedValue.slice(2, 7)}-${formattedValue.slice(7)}`);
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

    const adicionarResponsavel = async () => {
        const token = localStorage.getItem('token');
        console.log('Token:', token);
        console.log('Request Data:', { nome, cpf, email, telefone, posto: postoId });

        try {
            const response = await axios.post('http://localhost:8000/responsavel/', {
                nome, cpf, email, telefone, posto: postoId
            });

            toast({
                title: 'Cadastrado com sucesso',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });

            onClose();
        } catch (error) {
            console.error('Erro ao adicionar responsável:', error);
            console.log('Erro na resposta:', error.response);
        }
    };

    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    );

    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const [overlay, setOverlay] = React.useState(null);

    return (
        <>
            <Button
                minW={['10rem', '10rem']}
                maxW={['10rem', '10rem']}
                marginBottom={'15px'}
                variant='outline'
                textColor={'black'}
                borderColor={'#131328'}
                _hover={{ bg: '#FFBB0D', textColor: '#131328', borderColor: '#FFBB0D' }}

                onClick={() => {
                    setOverlay(<OverlayOne />)
                    onOpen()
                }}
            >Cadastrar</Button>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={() => {
                    setOverlay(null);
                    onClose();
                }}
            >
                <ModalOverlay />
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
                                // onChange={handleChangeCPF}
                                onChange={(e) => setCpf(e.target.value)}
                                marginBottom={'15px'}
                                variant='filled'
                            />

                            <FormLabel>Email</FormLabel>
                            <Input onChange={(e) => setEmail(e.target.value)} marginBottom={'15px'} variant='filled' />

                            <FormLabel>Telefone</FormLabel>
                            <Input
                                value={telefone}
                                onChange={handleChangeTelefone}
                                marginBottom={'15px'}
                                variant='filled'
                            />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={3} onClick={adicionarResponsavel} bg="#131328" color="white" _hover={{ bg: '#131328', color: 'white' }}>
                            Salvar
                        </Button>
                        <Button  borderColor={isOpen ? '#FFBB0D' : '#131328'}  onClick={onClose} _hover={{ color: '#131328', borderColor: '#FFBB0D' }}borderWidth="2px">Cancelar</Button>
                    </ModalFooter>

                </ModalContent>
            </Modal>
        </>
    );
}
