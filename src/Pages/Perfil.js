import React, { useEffect, useState } from 'react';
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
import { CaixaInfo2 } from '../components/Informacoes/CaixaInfo2';

import axios from 'axios';

function Perfil() {
    const [postoId, setPostoId] = useState(null);
    const [postoNome, setPostoNome] = useState(null);
    const [postoInfo, setPostoInfo] = useState(null);
    const [responsavelInfo, setResponsavelInfo] = useState(null);

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

    useEffect(() => {
        const fetchPostoInfo = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/posto/${postoId}`);
                // console.log("Informações do posto", response.data);
                setPostoInfo(response.data);
            } catch (error) {
                console.error('Erro ao obter informações do posto:', error);
            }
        };

        const fetchResponsavelInfo = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/responsavel/${postoId}/dadosPerfil/`);
                console.log("Informações do responsavel", response.data);
                setResponsavelInfo(response.data);
            } catch (error) {
                console.error('Erro ao obter informações do responsavel:', error);
            }
        };

        if (postoId) {
            fetchPostoInfo();
            fetchResponsavelInfo();
        }
    }, [postoId]);

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
                        <CaixaInfo2 title={'Nome Fantasia'} info={postoInfo?.nome_fantasia} margin={4} />

                        <Spacer height={4} />

                        <HStack spacing={4} justifyContent="center" mb={4} width="100%">
                            <CaixaInfo2 title={'Bandeira'} info={postoInfo?.bandeira} />
                            <CaixaInfo2 title={'CNPJ'} info={postoInfo?.cnpj} />
                            {/* <CaixaInfo2 title={'Telefone Empresarial'} info={'Informação que virá do back'} /> */}
                        </HStack>

                        <CaixaInfo2 title={'Endereço'} info={postoInfo?.endereco} margin={4} />

                        <Spacer height={4} />

                        <HStack spacing={4} justifyContent="center" mb={4}>
                            <CaixaInfo2 title={'CEP'} info={postoInfo?.cep} />
                            <CaixaInfo2 title={'Cidade'} info={postoInfo?.cidade} />
                            <CaixaInfo2 title={'UF'} info={postoInfo?.uf} />
                        </HStack>

                        <CaixaInfo2 title={'E-mail'} info={postoInfo?.email} mb={4} />

                        <Spacer height={4} />

                        <HStack spacing={4} justifyContent="center" mb={4}>

                            <CaixaInfo2 title={'Responsável pela Empresa'} info={responsavelInfo?.nome} />
                            <CaixaInfo2 title={'Telefone do Responsável'} info={responsavelInfo?.telefone} />
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
