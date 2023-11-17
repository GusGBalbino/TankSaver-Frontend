import React, { useState } from 'react';
import {
    ChakraProvider,
    Grid,
    theme,
    Heading,
    Divider,
    Tooltip,
    Tabs,
    TabList,
    Tab,
    TabPanel,
    TabPanels,
    TabIndicator,
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
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (index) => {
        setTabIndex(index);
    };

    const tabelas = [
        <TabelaFuncionarios />,
        <TabelaResponsavel />,
        <TabelaCompra />,
        <TabelaVenda />,
        <TabelaTaxa />,
        <TabelaCustos />,
    ];

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

                <Tabs size='md' variant='enclosed' index={tabIndex} onChange={handleTabChange}>
                    <TabList>
                        <Tab _selected={{ color: '#FFBB0D', bg: '#131328' }}>Funcionários</Tab>
                        <Tab _selected={{ color: '#FFBB0D', bg: '#131328' }}>Responsável</Tab>
                        <Tab _selected={{ color: '#FFBB0D', bg: '#131328' }}>Compra</Tab>
                        <Tab _selected={{ color: '#FFBB0D', bg: '#131328' }}>Venda</Tab>
                        <Tab _selected={{ color: '#FFBB0D', bg: '#131328' }}>Taxa</Tab>
                        <Tab _selected={{ color: '#FFBB0D', bg: '#131328' }}>Custos</Tab>
                    </TabList>
                    <TabIndicator
                        mt="-1.5px"
                        height="2px"
                        bg="#FFBB0D"
                        borderRadius="1px"
                    />

                    <TabPanels>
                        {tabelas.map((tabela, index) => (
                            <TabPanel key={index}>
                                {tabela}
                            </TabPanel>
                        ))}
                    </TabPanels>
                </Tabs>

                <Divider marginTop={'1rem'} marginBottom={'3rem'} />
                <Rodape />

            </Grid>
        </ChakraProvider>
    );
}

export default Dados;
