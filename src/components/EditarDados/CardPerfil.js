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

    const [nome_fantasia, setNomeFantasia] = useState(0);
    const [cnpj, setCnpj] = useState(0);
    const [cidade, setCidade] = useState(0);
    const [telefone, setTelefone] = useState(0);
    const [endereco, setEndereco] = useState(0);
    const [cep, setCep] = useState(0);
    const [email, setEemail] = useState(0);
    const [uf, setUf] = useState(0);
    const [bandeira, setBandeira] = useState(0);

    const [postoName, setPostoNome] = useState('');
    const [postoId, setPostoId] = useState('');

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
                                    <Input placeholder='Nome Fantasia...' color="black" _placeholder={{ color: 'black.500' }} bg="white" onChange={(e) => setNomeFantasia(e.target.value)} />
                                </FormControl>
                            </Box>

                            <Box mb={4}>
                                <FormControl isRequired>
                                    <FormLabel bg="#131328" color="white" borderRadius="3" mb={1} mr={1} paddingLeft={4}>
                                        CNPJ
                                    </FormLabel>
                                    <Input placeholder='CNPJ...' color="black" _placeholder={{ color: 'black.500' }} bg="white" onChange={(e) => setCnpj(e.target.value)}/>
                                </FormControl>
                            </Box>

                            <Box mb={4}>
                                <FormControl isRequired>
                                    <FormLabel bg="#131328" color="white" borderRadius="3" mb={1} mr={1} paddingLeft={4}>
                                        Bandeira
                                    </FormLabel>
                                    <Input placeholder='CNPJ...' color="black" _placeholder={{ color: 'black.500' }} bg="white" onChange={(e) => setBandeira(e.target.value)}/>
                                </FormControl>
                            </Box>

                            {/* <Box mb={4}>
                                <FormControl isRequired>
                                    <FormLabel bg="#131328" color="white" borderRadius="3" mb={1} mr={1} paddingLeft={4}>
                                        Telefone Empresarial
                                    </FormLabel>
                                    <Input placeholder='Telefone Empresarial...' color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                                </FormControl>
                            </Box> */}

                            <Box mb={4}>
                                <FormControl isRequired>
                                    <FormLabel bg="#131328" color="white" borderRadius="3" mb={1} mr={1} paddingLeft={4}>
                                        CEP
                                    </FormLabel>
                                    <Input placeholder='CEP...' color="black" _placeholder={{ color: 'black.500' }} bg="white" onChange={(e) => setCep(e.target.value)} />
                                </FormControl>
                            </Box>

                            <Box mb={4}>
                                <FormControl isRequired>
                                    <FormLabel bg="#131328" color="white" borderRadius="3" mb={1} mr={1} paddingLeft={4}>
                                        Endereço
                                    </FormLabel>
                                    <Input placeholder='Endereço...' color="black" _placeholder={{ color: 'black.500' }} bg="white" onChange={(e) => setEndereco(e.target.value)}/>
                                </FormControl>
                            </Box>

                            <Box mb={4}>
                                <FormControl isRequired>
                                    <FormLabel bg="#131328" color="white" borderRadius="3" mb={1} mr={1} paddingLeft={4}>
                                        Cidade
                                    </FormLabel>
                                    <Input placeholder='Município...' color="black" _placeholder={{ color: 'black.500' }} bg="white" onChange={(e) => setCidade(e.target.value)}/>
                                </FormControl>
                            </Box>

                            <Box mb={4}>
                                <FormControl isRequired>
                                    <FormLabel bg="#131328" color="white" borderRadius="3" mb={1} mr={1} paddingLeft={4}>
                                        UF
                                    </FormLabel>
                                    <Input placeholder='UF...' color="black" _placeholder={{ color: 'black.500' }} bg="white" onChange={(e) => setUf(e.target.value)} />
                                </FormControl>
                            </Box>

                            <Box mb={4}>
                                <FormControl isRequired>
                                    <FormLabel bg="#131328" color="white" borderRadius="3" mb={1} mr={1} paddingLeft={4}>
                                        E-mail
                                    </FormLabel>
                                    <Input placeholder='E-mail...' color="black" _placeholder={{ color: 'black.500' }} bg="white" onChange={(e) => setEemail(e.target.value)}/>
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