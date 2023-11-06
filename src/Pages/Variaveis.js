import React from 'react';
import {
    ChakraProvider,
    Grid,
    theme,
    Heading,
    Divider,
} from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Rodape from '../components/Rodape/Rodape';
import { CardCadastro } from '../components/Cadastro/CardCadastro';

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
                <Heading textAlign={'center'}>Cadastramento de Variávies</Heading>
                <Divider marginTop={'1rem'} marginBottom={'3rem'} />
                <CardCadastro
                    title={'Cadastro de Compra'}
                    info={'Selecione o tipo de combustível'}
                    infoSelect={'option1'} />


                <Divider marginTop={'1rem'} marginBottom={'3rem'} />
                <Rodape />

            </Grid>
        </ChakraProvider>
    );
}

export default Variaveis;
