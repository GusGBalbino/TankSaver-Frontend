import React from 'react';
import {
    ChakraProvider,
    Grid,
    theme,
    Box,
    HStack,
    Flex,
    Heading,
    Divider,
    Spacer
} from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Rodape from '../components/Rodape/Rodape';
import { CardPerfil } from '../components/EditarDados/CardPerfil';
import { CaixaInfo } from '../components/Informacoes/CaixaInfo';

function Perfil() {
    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log('Cadastrou o usuário!');
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

                <Flex justifyContent="center" alignItems="center" as="form" marginBottom={8} >
                    <Box p={4} width={{ base: '100%', md: 'auto' }} maxW={{ base: '100%', md: '600px' }}>
                        <CaixaInfo title={'Nome Fantasia'} info={'Informação que virá do back'} mb={4} />

                        <Spacer height={4} />

                        <HStack spacing={4} justifyContent="center" mb={4}>
                            <CaixaInfo title={'Usuário'} info={'Informação que virá do back'} />
                            <CaixaInfo title={'CNPJ'} info={'Informação que virá do back'}  />
                            <CaixaInfo title={'Telefone Empresarial'} info={'Informação que virá do back'} />
                        </HStack>

                        <CaixaInfo title={'Endereço'} info={'Informação que virá do back'} mb={4}/>

                        <Spacer height={4} />

                        <HStack spacing={4} justifyContent="center" mb={4}>
                            <CaixaInfo title={'CEP'} info={'Informação que virá do back'}/>
                            <CaixaInfo title={'Município'} info={'Informação que virá do back'} />
                            <CaixaInfo title={'UF'} info={'Informação que virá do back'} />
                        </HStack>

                        <CaixaInfo title={'E-mail'} info={'Informação que virá do back'} mb={4}/>

                        <Spacer height={4} />

                        <HStack spacing={4} justifyContent="center" mb={4}>
                            <CaixaInfo title={'Responsável pela Empresa'} info={'Informação que virá do back'} width="50%"/>
                            <CaixaInfo title={'Telefone'} info={'Informação que virá do back'} width="50%" />
                        </HStack>

                        <Box marginBox='left'>
                            <CardPerfil />
                        </Box>
                    </Box>
                </Flex>
            </Grid>

            <Sidebar />
        </ChakraProvider>
    );
}

export default Perfil;
