import React from 'react';
import {
    ChakraProvider,
    Grid,
    theme,
    Heading,
    Divider,
    SimpleGrid,
} from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Rodape from '../components/Rodape/Rodape';
import { CardCadastro, CardCadastroCompra } from '../components/Cadastro/CardCadastroCompra';
import { CaixaInfo } from '../components/Informacoes/CaixaInfo';
import { CadastrarVenda } from '../components/Cadastro/CadastrarVenda';
import { AlterarResponsavel } from '../components/Cadastro/AlterarResponsavel';
import { CadastrarTaxas } from '../components/Cadastro/CadastrarTaxas';
import { CadastrarFuncionario } from '../components/Cadastro/CadastrarFuncionario';

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
                marginLeft="13rem"
                >

                <Sidebar />
                <Heading textAlign={'center'}>Atualização de Dados </Heading>
                <Divider marginTop={'1rem'} marginBottom={'3rem'} />

                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>

                <CaixaInfo title={'Cadastro de Compras'} info={<CardCadastroCompra/>} />
                <CaixaInfo title={'Cadastro de Venda'} info={<CadastrarVenda/>} />
                <CaixaInfo title={'Cadastro de Taxas'} info={<CadastrarTaxas/>} />
                <CaixaInfo title={'Cadastro de Responsável'} info={<AlterarResponsavel/>} />
                <CaixaInfo title={'Cadastro de Funcionário'} info={<CadastrarFuncionario/>} />
                
                </SimpleGrid>

                <Divider marginTop={'1rem'} marginBottom={'3rem'} />
                <Rodape />

            </Grid>
        </ChakraProvider>
    );
}

export default Variaveis;
