import React from 'react';
import {
    ChakraProvider,
    Grid,
    theme,
    SimpleGrid,
    Flex,
    Heading,
    Divider,
} from '@chakra-ui/react';
import { AlertaAtualizacao } from '../components/Alerta/AlertaAtualizacao';
import Sidebar from './Sidebar';
import { CaixaInfo } from '../components/Informacoes/CaixaInfo';
import Rodape from '../components/Rodape/Rodape';

function Variaveis() {
    return (
        <ChakraProvider theme={theme}>

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

            <Sidebar />
            <Heading textAlign={'center'}>Variáveis</Heading>

            <Divider marginTop={'1rem'}  marginBottom={'3rem'} />
            <Rodape/>

        </Grid>
    </ChakraProvider>
    );
}

export default Variaveis;
