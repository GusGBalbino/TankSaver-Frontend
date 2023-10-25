import React from 'react';
import {
    ChakraProvider,
    VStack,
    Grid,
    theme,
} from '@chakra-ui/react';

import { AlertaBotao } from '../components/Alerta/AlertaBotao';
import { AlertaDiario } from '../components/Alerta/AlertaDiario';
import { AlertaAtualizacao } from '../components/Alerta/AlertaAtualizacao';


function Perfil() {
    return (
        <ChakraProvider theme={theme}>
            <Grid
                display={'flex'}
                flexDirection={'column'}
                width={'100vw'}
                minHeight="100vh"
                p={8}
                bgColor={'#F5F5F5'}>
                <VStack spacing={5}>
                    <AlertaBotao title={'Atualização de Dados'} description={'Lembre-se de atualizar os dados diáriamente, semanalmente e mensalmente.'}/>
                    <AlertaDiario />
                    <AlertaAtualizacao />
                </VStack>
            </Grid>
        </ChakraProvider>
    );
}

export default Perfil;
