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

function Perfil() {
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
                marginLeft="10rem"
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

                        <FormControl isRequired mb={2}>
                            <FormLabel bg="#131328" color="white" borderRadius="4" >Nome Fantasia</FormLabel>
                            <Input placeholder="Nome Fantasia..." color="#F5F5F5" _placeholder={{ color: 'black.500' }} bg="white" />
                        </FormControl>

                        <HStack align="center" spacing={{ base: 0, md: 4 }}>
                            <FormControl isRequired mb={2}>
                                <FormLabel bg="#131328" color="white" borderRadius="3">Usuário</FormLabel>
                                <Input placeholder="Usuário..." color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                            </FormControl>

                            <FormControl isRequired mb={2}>
                                <FormLabel bg="#131328" color="white" borderRadius="3">CNPJ</FormLabel>
                                <Input placeholder="CNPJ..." color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                            </FormControl>

                            <FormControl isRequired mb={2}>
                                <FormLabel bg="#131328" color="white" borderRadius="3">Telefone Empresarial</FormLabel>
                                <Input placeholder="(XX) X XXXX-XXXX..." color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                            </FormControl>
                        </HStack>

                        <FormControl isRequired mb={2}>
                            <FormLabel bg="#131328" color="white" borderRadius="3">Endereço</FormLabel>
                            <Input placeholder="Endereço..." color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                        </FormControl>

                        <HStack align="center" spacing={{ base: 0, md: 4 }}>
                            <FormControl isRequired mb={2}>
                                <FormLabel bg="#131328" color="white" borderRadius="3">CEP</FormLabel>
                                <Input placeholder="CEP..." color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                            </FormControl>

                            <FormControl isRequired mb={2}>
                                <FormLabel bg="#131328" color="white" borderRadius="3">MUNICÍPIO</FormLabel>
                                <Input placeholder="MUNICÍPIO..." color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                            </FormControl>

                            <FormControl isRequired mb={2}>
                                <FormLabel bg="#131328" color="white" borderRadius="3">UF</FormLabel>
                                <Input placeholder="UF..." color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                            </FormControl>
                        </HStack>

                        <FormControl isRequired mb={2}>
                            <FormLabel bg="#131328" color="white" borderRadius="3">E-mail</FormLabel>
                            <Input type="email" placeholder="E-mail..." color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                        </FormControl>

                        <HStack align="center" spacing={{ base: 0, md: 4 }}>
                            <FormControl isRequired mb={2}>
                                <FormLabel bg="#131328" color="white" borderRadius="3">Responsável pela empresa</FormLabel>
                                <Input placeholder="Responsável pela empresa..." color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                            </FormControl>

                            <FormControl isRequired mb={2}>
                                <FormLabel bg="#131328" color="white" borderRadius="3">Telefone</FormLabel>
                                <Input placeholder="(XX) X XXXX-XXXX..." color="black" _placeholder={{ color: 'black.500' }} bg="white" />
                            </FormControl>
                        </HStack>
                    </Box>
                </Flex>
            </Grid>

            <Sidebar />
        </ChakraProvider>
    );
}

export default Perfil;
