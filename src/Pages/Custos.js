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
import { AlertaUltimaAtualizacao } from '../components/Alerta/AlertaUltimaAtualizacao';
import Sidebar from './Sidebar';
import { CaixaInfo } from '../components/Informacoes/CaixaInfo';
import Rodape from '../components/Rodape/Rodape';
import { BotaoEditar } from '../components/Botoes/BotaoEditar';

function Custos() {
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

                <Heading textAlign={'center'}>Custos</Heading>

                <Divider marginTop={'1rem'} />

                <Heading size={'md'} marginTop={'3rem'} marginBottom={'0.5rem'}>Valor de compra</Heading>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    <CaixaInfo title={'Gasolina Comum'} info={'Informação que virá do back'} editor={<BotaoEditar/>}/>
                    <CaixaInfo title={'Gasolina Aditivada'} info={'Informação que virá do back'} editor={<BotaoEditar/>}/>
                    <CaixaInfo title={'Etanol'} info={'Informação que virá do back'} editor={<BotaoEditar/>}/>
                    <CaixaInfo title={'Disel Comum'} info={'Informação que virá do back'} editor={<BotaoEditar/>}/>
                    <CaixaInfo title={'Disel S10'} info={'Informação que virá do back'} editor={<BotaoEditar/>}/>
                </SimpleGrid>

                <Heading size={'md'} marginTop={'3rem'} marginBottom={'0.5rem'}>Volume de compra</Heading>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    <CaixaInfo title={'Gasolina Comum'} info={'Informação que virá do back'} editor={<BotaoEditar/>}/>
                    <CaixaInfo title={'Gasolina Aditivada'} info={'Informação que virá do back'} editor={<BotaoEditar/>}/>
                    <CaixaInfo title={'Etanol'} info={'Informação que virá do back'} editor={<BotaoEditar/>}/>
                    <CaixaInfo title={'Disel Comum'} info={'Informação que virá do back'} editor={<BotaoEditar/>}/>
                    <CaixaInfo title={'Disel S10'} info={'Informação que virá do back'} editor={<BotaoEditar/>}/>
                </SimpleGrid>

                <Heading size={'md'} marginTop={'3rem'} marginBottom={'0.5rem'}>Impostos</Heading>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    <CaixaInfo title={'IBAMA'} info={'Informação que virá do back'} editor={<BotaoEditar/>}/>
                    <CaixaInfo title={'IBRAN'} info={'Informação que virá do back'} editor={<BotaoEditar/>}/>
                    <CaixaInfo title={'AGEFIS'} info={'Informação que virá do back'} editor={<BotaoEditar/>}/>
                </SimpleGrid>


                <Heading size={'md'} marginTop={'3rem'} marginBottom={'0.5rem'}>Taxas de cartão</Heading>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    <CaixaInfo title={'Débito'} info={'Informação que virá do back'} editor={<BotaoEditar/>}/>
                    <CaixaInfo title={'Crédito'} info={'Informação que virá do back'} editor={<BotaoEditar/>}/>
                </SimpleGrid>

                <Flex marginTop={'10'} justifyContent={'flex-end'}>
                    <AlertaUltimaAtualizacao dataHora={'dia tal hora tal'} />
                </Flex>

                <Divider marginTop={'1rem'} marginBottom={'3rem'} />
                <Rodape />

            </Grid>
        </ChakraProvider>
    );
}

export default Custos;
