import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    ChakraProvider,
    Grid,
    theme,
    Heading,
    Divider,
    useToast
} from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Rodape from '../components/Rodape/Rodape';
import Chart from 'react-apexcharts';

function Dashboard() {
    const [postoName, setPostoNome] = useState('');
    const [postoId, setPostoId] = useState('');

    

    useEffect(() => {
        const storedPostoId = localStorage.getItem('postoId');
        const storedPostoName = localStorage.getItem('postoName');
        console.log('Stored Posto ID:', storedPostoId);
        // console.log('Stored Posto Name:', storedPostoName);
        if (storedPostoId && storedPostoName) {
            setPostoId(storedPostoId);
            setPostoNome(storedPostoName);
        }
    }, []);

    const [chartData, setChartData] = useState({
        options: {
            chart: {
                id: 'basic-bar',
            },
            xaxis: {
                categories: [],
            },
        },
        series: [
            {
                name: 'Fechamento Mensal',
                data: [],
            },
        ],
    });

    useEffect(() => {
        // Chamada à API usando axios
        axios.get(`http://localhost:8000/historico/fecharMes/${postoId}`)
            .then(response => {
                const dataFromApi = response.data;
                console.log(response.data);

                const categories = dataFromApi.map(item => item.data_historico);
                const fechamentoMensal = dataFromApi.map(item => parseFloat(item.despesa_mensal));
        

                setChartData({
                    options: {
                        chart: {
                            id: 'basic-bar',
                        },
                        xaxis: {
                            categories,
                        },
                    },
                    series: [
                        {
                            name: 'Fechamento Mensal',
                            data: fechamentoMensal,
                        },
                    ],
                });
            })
            .catch(error => {
                console.error('Erro ao buscar dados da API:', error);
            });
    }, []); 
    
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
                <Heading textAlign={'center'}>Dashboard</Heading>
                <Divider marginTop={'1rem'} marginBottom={'3rem'} />

                <Chart
                    options={chartData.options}
                    series={chartData.series}
                    type="bar"
                    height={350}
                />

                <Rodape />
            </Grid>
        </ChakraProvider>
    );
}

export default Dashboard;