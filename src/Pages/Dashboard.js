import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Rodape from '../components/Rodape/Rodape';
import Chart from 'react-apexcharts';
import {
    ChakraProvider,
    Grid,
    theme,
    Heading,
    Divider,
    Button,
    Flex,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure
} from '@chakra-ui/react';

function Dashboard() {
    const [postoName, setPostoNome] = useState('');
    const [postoId, setPostoId] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        const storedPostoId = localStorage.getItem('postoId');
        const storedPostoName = localStorage.getItem('postoName');
        console.log('Stored Posto ID:', storedPostoId);
        if (storedPostoId && storedPostoName) {
            setPostoId(storedPostoId);
            setPostoNome(storedPostoName);
        }
    }, []);

    const [chartData, setChartData] = useState({
        options: {
            chart: {
                id: 'basic-bar',
                type: 'bar',
                toolbar: {
                    show: true
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '30%', // Largura das colunas ajustada
                    endingShape: 'rounded'
                }
            },
            xaxis: {
                categories: [],
                labels: {
                    rotate: -45,
                    rotateAlways: true
                }
            },
            yaxis: {
                labels: {
                    formatter: function (val) {
                        return val.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
                    }
                }
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
                    }
                }
            },
            colors: ['#008FFB', '#00E396', '#FEB019']
        },
        series: [
            {
                name: 'Despesa Mensal',
                data: [],
            },
            {
                name: 'Faturamento Mensal',
                data: [],
            },
            {
                name: 'Total de Rendimento',
                data: [],
            },
        ],
    });

    useEffect(() => {
        const postoId = localStorage.getItem("postoId");
        axios.get(`localhost:8000/historico/${postoId}/historicoPorPosto/`)
        .then(response => {
            const dataFromApi = response.data;
            console.log(response.data);

            const categories = dataFromApi.map(item => item.data_historico);
            const despesaMensal = dataFromApi.map(item => parseFloat(item.despesa_mensal));
            const faturamentoMensal = dataFromApi.map(item => parseFloat(item.faturamento_mensal));
            const totalRendimento = dataFromApi.map(item => parseFloat(item.total_rendimento));

            setChartData(prevState => ({
                ...prevState,
                options: {
                    ...prevState.options,
                    xaxis: {
                        ...prevState.options.xaxis,
                        categories,
                    }
                },
                series: [
                    { name: 'Despesa Mensal', data: despesaMensal },
                    { name: 'Faturamento Mensal', data: faturamentoMensal },
                    { name: 'Total de Rendimento', data: totalRendimento }
                ]
            }));
        })
        .catch(error => {
            console.error('Erro ao buscar dados da API:', error);
        });
    }, [postoId]); 

    const enviarFechamentoMes = () => {
        onOpen();
    }

    const confirmarFechamentoMes = () => {
        axios.post(`localhost:8000/historico/fecharMes/`, {
            posto_id: localStorage.getItem("postoId") 
        })
        .then(response => {
            console.log('Dados enviados com sucesso:', response);
            onClose();
        })
        .catch(error => {
            console.error('Erro ao enviar dados:', error);
        });
    };
    
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
                <Heading textAlign={'center'} fontWeight={'15px'}>Dashboard</Heading>
                <Divider marginTop={'1rem'} marginBottom={'3rem'} />
                
                

                <Chart
                    options={chartData.options}
                    series={chartData.series}
                    type="bar"
                    height={350}
                />

                <Flex justifyContent="flex-end">
                    <Button 
                        size="sm"
                        variant='outline'
                        textColor={'black'}
                        borderColor={'#131328'}
                        _hover={{ bg: '#FFBB0D', textColor: '#131328', borderColor: '#131328' }}
                        onClick={enviarFechamentoMes}>
                            Fechar Mês
                    </Button>
                </Flex>

                <Rodape />
            </Grid>
            <AlertDialog
                isOpen={isOpen}
                onClose={onClose}
                isCentered
            >
                <AlertDialogOverlay>
                    <AlertDialogContent
                        bg="#131328"
                        color="white"
                        borderColor="#8D7843"
                        borderWidth="1px"
                        borderRadius="8px"
                        
                    >
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Fechar Mês
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Tem certeza que deseja fechar o mês?
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button 
                                color="white"
                                bg="#ff6347"
                                _hover={{ bg: "#e05a4f" }}
                                onClick={onClose}
                            >
                                Cancelar
                            </Button>
                            <Button colorScheme="green" onClick={confirmarFechamentoMes} ml={3}>
                                Confirmar
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </ChakraProvider>
    );
}

export default Dashboard;
