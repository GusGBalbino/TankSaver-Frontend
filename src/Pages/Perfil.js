import React from 'react';
import {
    ChakraProvider,
    Grid,
    theme,
    Box,
    FormControl,
    FormLabel,
    Input,
    HStack,
    Flex,
    Heading,
    Divider,
} from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Rodape from '../components/Rodape/Rodape';
import { BotaoAlteracao } from '../components/Botoes/BotaoAlteracao';
import { EditIcon } from '@chakra-ui/icons';
import { CardPerfil } from '../components/EditarDados/CardPerfil';

function Perfil() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log('Cadastrou o usuário!')
    }
    return (
        <ChakraProvider theme={theme}>
            <Rodape />
            <Grid
                display={'flex'}
                flexDirection={'column'}
                templateColumns={{ base: '1fr', md: '1fr 2fr' }}
                minHeight="100vh"
                p={8}
                bgColor={'#F5F5F5'}
                zIndex="1"
                marginLeft="13rem"
            >
                <Heading textAlign={'center'}>Perfil</Heading>
                <Divider marginTop={'1rem'}></Divider>
                
                <Flex
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box
                        p={4}
                        width={{ base: '100%', md: 'auto' }}
                        maxW={{ base: '100%', md: '600px' }}
                    >

                        <FormControl isRequired mb={2} onSubmit={cadastrarUsuario}>
                            <FormLabel bg="#131328" color="white" borderRadius="4">
                                <span style={{ paddingLeft: '5px' }}>Nome Fantasia</span>
                            </FormLabel>
                            <Input placeholder="Nome Fantasia..." color="#F5F5F5" _placeholder={{ color: 'black.500' }} bg="white" />
                        </FormControl>

                        <HStack align="center" spacing={{ base: 0, md: 4 }}>
                            <FormControl isRequired mb={2}>
                                <FormLabel bg="#131328" color="white" borderRadius="3">
                                    <span style={{ paddingLeft: '5px' }}>Usuário</span>
                                </FormLabel>
                                <Input placeholder="Usuário..." color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                            </FormControl>

                            <FormControl isRequired mb={2}>
                                <FormLabel bg="#131328" color="white" borderRadius="3">
                                    <span style={{ paddingLeft: '5px' }}>CNPJ</span>
                                </FormLabel>
                                <Input placeholder="CNPJ..." color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                            </FormControl>

                            <FormControl isRequired mb={2}>
                                <FormLabel bg="#131328" color="white" borderRadius="3">
                                    <span style={{ paddingLeft: '5px'}}>Telefone Empresarial</span>
                                </FormLabel>
                                <Input placeholder="(XX) X XXXX-XXXX..." color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                            </FormControl>
                        </HStack>

                        <FormControl isRequired mb={2}>
                            <FormLabel bg="#131328" color="white" borderRadius="3">
                                <span style={{ paddingLeft: '5px' }}>Endereço</span>
                            </FormLabel>
                            <Input placeholder="Endereço..." color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                        </FormControl>

                        <HStack align="center" spacing={{ base: 0, md: 4 }}>
                            <FormControl isRequired mb={2}>
                                <FormLabel bg="#131328" color="white" borderRadius="3">
                                    <span style={{ paddingLeft: '5px' }}>CEP</span>
                                </FormLabel>
                                <Input placeholder="CEP..." color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                            </FormControl>

                            <FormControl isRequired mb={2}>
                                <FormLabel bg="#131328" color="white" borderRadius="3">
                                    <span style={{ paddingLeft: '5px' }}>MUNICÍPIO</span>
                                </FormLabel>
                                <Input placeholder="MUNICÍPIO..." color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                            </FormControl>

                            <FormControl isRequired mb={2}>
                                <FormLabel bg="#131328" color="white" borderRadius="3">
                                    <span style={{ paddingLeft: '5px' }}>UF</span>
                                </FormLabel>
                                <Input placeholder="UF..." color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                            </FormControl>
                        </HStack>

                        <FormControl isRequired mb={2}>
                            <FormLabel bg="#131328" color="white" borderRadius="3">
                                <span style={{ paddingLeft: '5px' }}>E-mail</span>
                            </FormLabel>
                            <Input type="email" placeholder="E-mail..." color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                        </FormControl>

                        <HStack align="center" spacing={{ base: 0, md: 4 }}>
                            <FormControl isRequired mb={2}>
                                <FormLabel bg="#131328" color="white" borderRadius="3">
                                    <span style={{ paddingLeft: '5px' }}>Responsável pela Empresa</span>
                                </FormLabel>
                                <Input placeholder="Responsável pela Empresa..." color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                            </FormControl>

                            <FormControl isRequired mb={2}>
                                <FormLabel bg="#131328" color="white" borderRadius="3">
                                    <span style={{ paddingLeft: '5px' }}>Telefone</span>
                                </FormLabel>
                                <Input placeholder="(XX) X XXXX-XXXX..." color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                            </FormControl>
                        </HStack>
                        <Divider marginTop={'1rem'}></Divider>
                        <BotaoAlteracao icon = {<EditIcon/>} name={'Editar Dados'}/>
                        <CardPerfil/>
                    </Box>
                    
                </Flex>
            </Grid>

            <Sidebar />
        </ChakraProvider>
    );
}

export default Perfil;
