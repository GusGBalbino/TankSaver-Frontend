import React from 'react';
import {
    ChakraProvider,
    Grid,
    theme,
    SimpleGrid,
    Flex,
    Heading,
    Divider,
    Tooltip,
    
} from '@chakra-ui/react';
import { AlertaUltimaAtualizacao } from '../components/Alerta/AlertaUltimaAtualizacao';
import Sidebar from './Sidebar';
import {QuestionOutlineIcon} from '@chakra-ui/icons';
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
                marginLeft="13rem"
            >

                <Sidebar />

                <Heading textAlign={'center'}>
                    Ganhos
                    <Tooltip label="Direcione-se à opção de Cadastro." fontSize="md" >
                        <QuestionOutlineIcon className="small-icon" style={{ transform: 'scale(0.5)' }} />
                    </Tooltip></Heading>
                <Divider marginTop={'1rem'} />

                <Heading size={'md'} marginTop={'3rem'} marginBottom={'0.5rem'}>Valor de venda atual</Heading>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    <CaixaInfo title={'Gasolina Comum'} info={'Informação que virá do back'} />
                    <CaixaInfo title={'Gasolina Aditivada'} info={'Informação que virá do back'} />
                    <CaixaInfo title={'Etanol'} info={'Informação que virá do back'} />
                    <CaixaInfo title={'Disel Comum'} info={'Informação que virá do back'} />
                    <CaixaInfo title={'Disel S10'} info={'Informação que virá do back'} />
                </SimpleGrid>

                <Heading size={'md'} marginTop={'3rem'} marginBottom={'0.5rem'}>Volume de venda semanal</Heading>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    <CaixaInfo title={'Gasolina Comum'} info={'Informação que virá do back'} />
                    <CaixaInfo title={'Gasolina Aditivada'} info={'Informação que virá do back'} />
                    <CaixaInfo title={'Etanol'} info={'Informação que virá do back'} />
                    <CaixaInfo title={'Disel Comum'} info={'Informação que virá do back'} />
                    <CaixaInfo title={'Disel S10'} info={'Informação que virá do back'} />
                </SimpleGrid>

                <Heading size={'md'} marginTop={'3rem'} marginBottom={'0.5rem'}>Total de lucros semanal</Heading>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    <CaixaInfo title={'Gasolina Comum'} info={'Informação que virá do back'} />
                    <CaixaInfo title={'Gasolina Aditivada'} info={'Informação que virá do back'} />
                    <CaixaInfo title={'Etanol'} info={'Informação que virá do back'} />
                    <CaixaInfo title={'Disel Comum'} info={'Informação que virá do back'} />
                    <CaixaInfo title={'Disel S10'} info={'Informação que virá do back'} />
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

export default Ganhos;
