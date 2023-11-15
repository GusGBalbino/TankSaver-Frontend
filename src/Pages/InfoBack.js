import React from 'react';
import {
    ChakraProvider,
    Grid,
    theme,
    Heading,
    Divider,
    Tooltip,
} from '@chakra-ui/react';

import Sidebar from './Sidebar';
import { QuestionOutlineIcon } from '@chakra-ui/icons';
import Rodape from '../components/Rodape/Rodape';
import TabelaFuncionarios from '../components/Tabelas/Funcionarios';
import TabelaResponsavel from '../components/Tabelas/Responsavel';
import TabelaCompra from '../components/Tabelas/Compra';
import TabelaVenda from '../components/Tabelas/Venda';
import TabelaTaxa from '../components/Tabelas/Taxas';
import TabelaCustos from '../components/Tabelas/Custos';


function Dados() {
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
                    Histórico
                    <Tooltip label="Para visualizar os dados de forma dinâmica vá ao dashboard." fontSize="md" >
                        <QuestionOutlineIcon className="small-icon" style={{ transform: 'scale(0.5)' }} />
                    </Tooltip>
                </Heading>
                <Divider marginTop={'1rem'} />

                <TabelaFuncionarios />
                <Divider margin={'0.5rem'} />

                <TabelaResponsavel />
                <Divider margin={'0.5rem'} />

                <TabelaCompra />
                <Divider margin={'0.5rem'} />

                <TabelaVenda />
                <Divider margin={'0.5rem'} />

                <TabelaTaxa />
                <Divider margin={'0.5rem'} />

                <TabelaCustos />

                <Divider marginTop={'1rem'} marginBottom={'3rem'} />
                <Rodape />

            </Grid>
        </ChakraProvider>
    );
}

export default Dados;
