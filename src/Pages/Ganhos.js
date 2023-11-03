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

function Ganhos() {
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

                <Heading textAlign={'center'}>Ganhos</Heading>

                <Divider marginTop={'1rem'} />

                <Heading textAlign={'center'}>CONTEÚDO</Heading>
                <Divider marginTop={'1rem'}  marginBottom={'3rem'} />

                <Heading size={'md'} marginTop={'3rem'} marginBottom={'0.5rem'}>Valor de venda atual</Heading>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    <CaixaInfo title={'Gasolina Comum'} info={'Informação que virá do back'}></CaixaInfo>
                    <CaixaInfo title={'Gasolina Aditivada'} info={'Informação que virá do back'}></CaixaInfo>
                    <CaixaInfo title={'Etanol'} info={'Informação que virá do back'}></CaixaInfo>
                    <CaixaInfo title={'Disel Comum'} info={'Informação que virá do back'}></CaixaInfo>
                    <CaixaInfo title={'Disel S10'} info={'Informação que virá do back'}></CaixaInfo>
                </SimpleGrid>

                <Heading size={'md'} marginTop={'3rem'} marginBottom={'0.5rem'}>Volume de venda semanal</Heading>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    <CaixaInfo title={'Gasolina Comum'} info={'Informação que virá do back'}></CaixaInfo>
                    <CaixaInfo title={'Gasolina Aditivada'} info={'Informação que virá do back'}></CaixaInfo>
                    <CaixaInfo title={'Etanol'} info={'Informação que virá do back'}></CaixaInfo>
                    <CaixaInfo title={'Disel Comum'} info={'Informação que virá do back'}></CaixaInfo>
                    <CaixaInfo title={'Disel S10'} info={'Informação que virá do back'}></CaixaInfo>
                </SimpleGrid>

                <Heading size={'md'} marginTop={'3rem'} marginBottom={'0.5rem'}>Total de lucros semanal</Heading>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    <CaixaInfo title={'Gasolina Comum'} info={'Informação que virá do back'}></CaixaInfo>
                    <CaixaInfo title={'Gasolina Aditivada'} info={'Informação que virá do back'}></CaixaInfo>
                    <CaixaInfo title={'Etanol'} info={'Informação que virá do back'}></CaixaInfo>
                    <CaixaInfo title={'Disel Comum'} info={'Informação que virá do back'}></CaixaInfo>
                    <CaixaInfo title={'Disel S10'} info={'Informação que virá do back'}></CaixaInfo>
                </SimpleGrid>

                <Flex marginTop={'10'} justifyContent={'flex-end'}>
                    <AlertaAtualizacao dataHora={'dia tal hora tal'} />
                </Flex>

                <Divider marginTop={'1rem'} marginBottom={'3rem'} />
                <Rodape />

            </Grid>
        </ChakraProvider>
    );
}

export default Ganhos;
