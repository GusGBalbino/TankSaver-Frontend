import React from 'react';
import {
    ChakraProvider,
    VStack,
    Grid,
    theme,
} from '@chakra-ui/react';
import { EditIcon, CheckIcon } from '@chakra-ui/icons'

import { AlertaBotao } from '../components/Alerta/AlertaBotao';
import { AlertaDiario } from '../components/Alerta/AlertaDiario';
import { AlertaAtualizacao } from '../components/Alerta/AlertaAtualizacao';
import { BotaoAlteracao } from '../components/Botoes/BotaoAlteracao';


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
                    <AlertaDiario title={'Atualização de Dados'} description={'Seus dados estão desatualizados, para continuar é necessário que atualize-os.'} />
                    <AlertaAtualizacao dataHora={'dia tal hora tal'} description={'Os dados de volume e custo total de venda são referentes à semana anterior.'} />
                    <BotaoAlteracao icon={<EditIcon/>} name={"Editar"} />
                    <BotaoAlteracao icon={<CheckIcon/>} name={"Salvar Alterações"} />
                </VStack>
            </Grid>
        </ChakraProvider>
    );
}

export default Perfil;
