import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    FormControl,
    useDisclosure,
    ModalOverlay,
    FormLabel,
    Input,
    Divider,
    Flex,
    useToast,
    Spacer,
    Box,
    ModalFooter
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

export function CardPerfil() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [nome_fantasia, setNomeFantasia] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [cidade, setCidade] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cep, setCep] = useState('');
    const [email, setEmail] = useState('');
    const [uf, setUf] = useState('');
    const [bandeira, setBandeira] = useState('');
    const [telefonempresarial, setTelefoneEmpresarial] = useState('');
    const [senha, setSenha] = useState('');

    const [postoName, setPostoNome] = useState('');
    const [postoId, setPostoId] = useState('');

    const toast = useToast();

    useEffect(() => {
        const storedPostoId = localStorage.getItem('postoId');
        const storedPostoName = localStorage.getItem('postoName');
        console.log('Stored Posto ID:', storedPostoId);
        //console.log('Stored Posto Name:', storedPostoName);
        if (storedPostoId && storedPostoName) {
            setPostoId(storedPostoId);
            setPostoNome(storedPostoName);
        }
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:8000/posto/${postoId}`);
            const data = response.data;

            setNomeFantasia(data.nome_fantasia);
            setCnpj(data.cnpj);
            setCidade(data.cidade);
            setTelefone(data.telefone);
            setEndereco(data.endereco);
            setCep(data.cep);
            setEmail(data.email);
            setUf(data.uf);
            setBandeira(data.bandeira);
            setTelefoneEmpresarial(data.telefone_empresarial);
        };

        if (isOpen) {
            fetchData();
        }
    }, [isOpen, postoId]);


    const adicionarPosto = async () => {
        const token = localStorage.getItem('token');
        console.log('Token:', token);
        console.log('Request Data:', {
            nome_fantasia,
            cnpj,
            bandeira,
            cidade,
            endereco,
            cep,
            email,
            uf,
            telefone,
            senha,
            posto: postoId
        });

        try {
            const response = await axios.post('http://localhost:8000/posto/', {
                nome_fantasia,
                cnpj,
                bandeira,
                cidade,
                endereco,
                cep,
                email,
                uf,
                telefone,
                telefone,
                senha, 
                posto: postoId
            });

            toast({
                position: 'top',
                title: 'Cadastrado com sucesso',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });

            onClose();
        } catch (error) {
            console.error('Erro ao adicionar posto:', error);
            console.log('Erro na resposta:', error.response);
        }
    };

    const formatarCep = (cep) => {
        // Remove caracteres não numéricos do CEP
        const cepNumerico = cep.replace(/\D/g, '');
    
        // Limita o CEP a 8 dígitos
        const cepLimitado = cepNumerico.slice(0, 8);
    
        // Adiciona a formatação: XXXXX-XXX
        const cepFormatado = cepLimitado.replace(/(\d{5})(\d{3})/, '$1-$2');
    
        return cepFormatado;
    };
    
    const formatarCnpj = (cnpj) => {
        // Remove caracteres não numéricos do CNPJ
        const cnpjNumerico = cnpj.replace(/\D/g, '');
    
        // Limita o CNPJ a 14 dígitos
        const cnpjLimitado = cnpjNumerico.slice(0, 14);
    
        // Adiciona a formatação: XX.XXX.XXX/0001-XX
        const cnpjFormatado = cnpjLimitado.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    
        return cnpjFormatado;
    };    

    return (
        <>

            <Spacer />
            <Button
                minW={['10rem', '10rem']}
                maxW={['10rem', '10rem']}
                variant='outline'
                textColor={'black'}
                borderColor={'#131328'}
                justifyContent="flex-start"
                _hover={{ bg: '#FFBB0D', textColor: '#131328', borderColor: '#131328' }}
                onClick={onOpen}
                position="sticky"
                top="0"
                zIndex="2"
                marginLeft="35rem"
            >
                <Flex align="center">
                    <EditIcon mr={2} />
                    Editar Dados
                </Flex>
            </Button>


            <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader>Editar Dados</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl mb={2} >
                            <Box mb={4} >
                                <FormControl isRequired>
                                    <FormLabel bg="#131328" color="white" borderRadius="3" mb={1} mr={1} paddingLeft={4}>
                                        Nome Fantasia
                                    </FormLabel>
                                    <Input value={nome_fantasia} color="black" _placeholder={{ color: 'black.500' }} bg="white" onChange={(e) => setNomeFantasia(e.target.value)} />
                                </FormControl>
                            </Box>

                            <Box mb={4}>
                                <FormControl isRequired>
                                    <FormLabel bg="#131328" color="white" borderRadius="3" mb={1} mr={1} paddingLeft={4}>
                                        CNPJ
                                    </FormLabel>
                                    <Input value={cnpj} color="black" _placeholder={{ color: 'black.500' }} bg="white" onChange={(e) => setCnpj(formatarCnpj(e.target.value))}/>
                                </FormControl>
                            </Box>

                            <Box mb={4}>
                                <FormControl isRequired>
                                    <FormLabel bg="#131328" color="white" borderRadius="3" mb={1} mr={1} paddingLeft={4}>
                                        Bandeira
                                    </FormLabel>
                                    <Input value={bandeira} color="black" _placeholder={{ color: 'black.500' }} bg="white" onChange={(e) => setBandeira(e.target.value)}/>
                                </FormControl>
                            </Box>

                            <Box mb={4}>
                                <FormControl isRequired>
                                    <FormLabel bg="#131328" color="white" borderRadius="3" mb={1} mr={1} paddingLeft={4}>
                                        Telefone Empresarial
                                    </FormLabel>
                                    <Input value={telefone} color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                                </FormControl>
                            </Box> 

                            <Box mb={4}>
                                <FormControl isRequired>
                                    <FormLabel bg="#131328" color="white" borderRadius="3" mb={1} mr={1} paddingLeft={4}>
                                        CEP
                                    </FormLabel>
                                    <Input value={cep} color="black" _placeholder={{ color: 'black.500' }} bg="white"  onChange={(e) => setCep(formatarCep(e.target.value))} pattern="[0-9]{5}-[0-9]{3}" title="Digite um CEP válido no formato XXXXX-XXX"/>
                                </FormControl>
                            </Box>

                            <Box mb={4}>
                                <FormControl isRequired>
                                    <FormLabel bg="#131328" color="white" borderRadius="3" mb={1} mr={1} paddingLeft={4}>
                                        Endereço
                                    </FormLabel>
                                    <Input value={endereco} color="black" _placeholder={{ color: 'black.500' }} bg="white" onChange={(e) => setEndereco(e.target.value)}/>
                                </FormControl>
                            </Box>

                            <Box mb={4}>
                                <FormControl isRequired>
                                    <FormLabel bg="#131328" color="white" borderRadius="3" mb={1} mr={1} paddingLeft={4}>
                                        Cidade
                                    </FormLabel>
                                    <Input value={cidade} color="black" _placeholder={{ color: 'black.500' }} bg="white" onChange={(e) => setCidade(e.target.value)}/>
                                </FormControl>
                            </Box>

                            <Box mb={4}>
                                <FormControl isRequired>
                                    <FormLabel bg="#131328" color="white" borderRadius="3" mb={1} mr={1} paddingLeft={4}>
                                        UF
                                    </FormLabel>
                                    <Input value={uf} color="black" _placeholder={{ color: 'black.500' }} bg="white" onChange={(e) => setUf(e.target.value)} />
                                </FormControl>
                            </Box>

                            <Box mb={4}>
                                <FormControl isRequired>
                                    <FormLabel bg="#131328" color="white" borderRadius="3" mb={1} mr={1} paddingLeft={4}>
                                        E-mail
                                    </FormLabel>
                                    <Input value={email} color="black" _placeholder={{ color: 'black.500' }} bg="white" onChange={(e) => setEmail(e.target.value)}/>
                                </FormControl>
                            </Box>

                            <Box mb={4}>
                                <FormControl isRequired>
                                    <FormLabel bg="#131328" color="white" borderRadius="3" mb={1} mr={1} paddingLeft={4}>
                                        Senha
                                    </FormLabel>
                                    <Input value={senha} color="black" _placeholder={{ color: 'black.500' }} bg="white" onChange={(e) => setSenha(e.target.value)}/>
                                </FormControl>
                            </Box>



                        </FormControl>
                    </ModalBody>
                    <Divider marginTop={'1rem'} />
                    <ModalFooter>
                        <Button bg="#131328" color="white" mr={2} _hover={{ bg: '#131328', color: 'white' }} onClick={adicionarPosto}>
                            Salvar
                        </Button>
                        <Button borderColor={isOpen ? '#FFBB0D' : '#131328'} onClick={onClose} _hover={{ color: '#131328', borderColor: '#FFBB0D' }} borderWidth="2px">
                            Cancelar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}