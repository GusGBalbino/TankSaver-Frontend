import React from 'react';
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
    HStack,
    Spacer,
    Box,
    ModalFooter
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

export function CardPerfil() {
    const { isOpen, onOpen, onClose } = useDisclosure();

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
                                    <FormLabel bg="#131328" color="white" borderRadius="3"  mb={1} mr={1} paddingLeft={4}>
                                        Nome Fantasia
                                    </FormLabel>
                                    <Input placeholder='Nome Fantasia...' color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                                </FormControl>
                            </Box>

                            <Box mb={4}>
                                <FormControl isRequired>
                                    <FormLabel bg="#131328" color="white" borderRadius="3" mb={1} mr={1} paddingLeft={4}>
                                        Usuário
                                    </FormLabel>
                                    <Input placeholder='Usuário...' color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                                </FormControl>
                            </Box>

                            <Box mb={4}>
                                <FormControl isRequired>
                                    <FormLabel bg="#131328" color="white" borderRadius="3" mb={1} mr={1} paddingLeft={4}>
                                        CNPJ
                                    </FormLabel>
                                    <Input placeholder='CNPJ...' color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                                </FormControl>
                            </Box>

                            <Box mb={4}>
                                <FormControl isRequired>
                                    <FormLabel bg="#131328" color="white" borderRadius="3" mb={1} mr={1} paddingLeft={4}>
                                        Telefone Empresarial
                                    </FormLabel>
                                    <Input placeholder='Telefone Empresarial...' color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                                </FormControl>
                            </Box>

                            <Box mb={4}>
                                <FormControl isRequired>
                                    <FormLabel bg="#131328" color="white" borderRadius="3" mb={1} mr={1} paddingLeft={4}>
                                        CEP
                                    </FormLabel>
                                    <Input placeholder='CEP...' color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                                </FormControl>
                            </Box>

                            <Box mb={4}>
                                <FormControl isRequired>
                                    <FormLabel bg="#131328" color="white" borderRadius="3" mb={1} mr={1} paddingLeft={4}>
                                        Endereço
                                    </FormLabel>
                                    <Input placeholder='Endereço...' color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                                </FormControl>
                            </Box>

                            <Box mb={4}>
                                <FormControl isRequired>
                                    <FormLabel bg="#131328" color="white" borderRadius="3" mb={1} mr={1} paddingLeft={4}>
                                        Município
                                    </FormLabel>
                                    <Input placeholder='Município...' color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                                </FormControl>
                            </Box>

                            <Box mb={4}>
                                <FormControl isRequired>
                                    <FormLabel bg="#131328" color="white" borderRadius="3" mb={1} mr={1} paddingLeft={4}>
                                        UF
                                    </FormLabel>
                                    <Input placeholder='UF...' color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                                </FormControl>
                            </Box>

                            <Box mb={4}>
                                <FormControl isRequired>
                                    <FormLabel bg="#131328" color="white" borderRadius="3" mb={1} mr={1} paddingLeft={4}>
                                        E-mail
                                    </FormLabel>
                                    <Input placeholder='E-mail...' color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                                </FormControl>
                            </Box>

                            <Box mb={4}>
                                <FormControl isRequired>
                                    <FormLabel bg="#131328" color="white" borderRadius="3" mb={1} mr={1} paddingLeft={4}>
                                        Responsável pela Empresa
                                    </FormLabel>
                                    <Input placeholder='Responsável pela Empresa...' color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                                </FormControl>
                            </Box>

                            <Box mb={4}>
                                <FormControl isRequired>
                                    <FormLabel bg="#131328" color="white" borderRadius="3" mb={1} mr={1} paddingLeft={4}>
                                        Telefone
                                    </FormLabel>
                                    <Input placeholder='Telefone...' color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                                </FormControl>
                            </Box>
                        </FormControl>
                    </ModalBody>
                    <Divider marginTop={'1rem'} />
                    <ModalFooter>
                        <Button bg="#131328" color="white" mr={2} _hover={{ bg: '#131328', color: 'white' }} onClick={onClose}>
                            Salvar
                        </Button>
                        <Button borderColor={isOpen ? '#FFBB0D' : '#131328'}  onClick={onClose} _hover={{ color: '#131328', borderColor: '#FFBB0D' }}borderWidth="2px">
                            Cancelar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}