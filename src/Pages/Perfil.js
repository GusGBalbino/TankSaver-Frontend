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
import { CaixaInfo2} from '../components/Informacoes/CaixaInfo2';

function Perfil() {
    

    // useEffect(() => {
    //     const storedPostoId = localStorage.getItem('postoId');
    //     const storedPostoName = localStorage.getItem('postoName');
    //     console.log('Stored Posto ID:', storedPostoId);
    //     console.log('Stored Posto Name:', storedPostoName);
    //     if (storedPostoId && storedPostoName) {
    //         setPostoId(storedPostoId);
    //         setPostoNome(storedPostoName);
    //     }
    // }, []);

    // const cadastrarUsuario = async () => {
    //     const token = localStorage.getItem('token');
    //     console.log('Token:', token);
    //     console.log('Request Data:', {
    //         nome_fantasia: nome_fantasia,
    //         bandeira: bandeira,
    //         cnpj: cnpj,
    //         email: email,
    //         endereco: endereco,
    //         senha: senha,
    //         posto: postoId
    //     });

    //     try {
    //         const response = await axios.get('http://localhost:8000/posto/', {
    //             nome_fantasia,
    //             bandeira,
    //             cnpj,
    //             email,
    //             endereco,
    //             senha,
    //             posto: postoId
    //         });

    //         toast({
    //             position: 'top',
    //             title: 'Cadastrado com sucesso',
    //             status: 'success',
    //             duration: 3000,
    //             isClosable: true,
    //         });

    //         onClose();
    //     } catch (error) {
    //         console.error('Erro ao adicionar custos:', error);
    //         console.log('Erro na resposta:', error.response);
    //     }
    // };


    return (
        <ChakraProvider theme={theme}>
            <Rodape />

            <Grid
                display={'flex'}
                flexDirection={'column'}
                templateColumns={{ base: '1fr', md: '1fr 2fr' }}
                minHeight="100vh"
                p={{ base: 4, md: 8 }}
                bgColor={'#F5F5F5'}
                zIndex="1"
                marginLeft="13rem"
                overflow="auto"
            >
                <Heading textAlign={'center'}>Perfil</Heading>
                <Divider marginTop={'1rem'}></Divider>

                <Flex justifyContent="center" alignItems="center" as="form" marginBottom={8} >
                    <Box p={4} width={{ base: '100%', md: 'auto' }} maxW={{ base: '100%', md: '600px' }}>


                        <Spacer height={4} />

                        <CaixaInfo2 title={'Nome Fantasia'} info={'Informação que virá do back'} margin={4} />

                        <Spacer height={4} />

                        <HStack spacing={4} justifyContent="center" mb={4}  width="100%">
                            <CaixaInfo2 title={'Usuário'} info={'Informação que virá do back'}/>
                            <CaixaInfo2 title={'CNPJ'} info={'Informação que virá do back'} />
                            <CaixaInfo2 title={'Telefone Empresarial'} info={'Informação que virá do back'}  />
                        </HStack>

                        <CaixaInfo2 title={'Endereço'} info={'Informação que virá do back'}  margin={4}/>

                        <Spacer height={4} />

                        <HStack spacing={4} justifyContent="center" mb={4}>
                            <CaixaInfo2 title={'CEP'} info={'Informação que virá do back'}/>
                            <CaixaInfo2 title={'Município'} info={'Informação que virá do back'} />
                            <CaixaInfo2 title={'UF'} info={'Informação que virá do back'} />
                        </HStack>

                        <CaixaInfo2 title={'E-mail'} info={'Informação que virá do back'} mb={4}/>

                        <Spacer height={4} />

                        <HStack spacing={4} justifyContent="center" mb={4}>
                            <CaixaInfo2 title={'Responsável pela Empresa'} info={'Informação que virá do back'} />
                            <CaixaInfo2 title={'Telefone'} info={'Informação que virá do back'}  />
                        </HStack>
                        <Spacer />
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
