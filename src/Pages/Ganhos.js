import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    ChakraProvider,
    Grid,
    theme,
    SimpleGrid,
    Flex,
    Heading,
    Divider,
    Tooltip,
    Spinner
} from '@chakra-ui/react';
import { AlertaUltimaAtualizacao } from '../components/Alerta/AlertaUltimaAtualizacao';
import Sidebar from './Sidebar';
import { QuestionOutlineIcon } from '@chakra-ui/icons';
import { CaixaInfo } from '../components/Informacoes/CaixaInfo';
import Rodape from '../components/Rodape/Rodape';

axios.defaults.baseURL = "http://localhost:8000";

function Ganhos() {
    const [dadosVenda, setDadosVenda] = useState([]);
    const [loading, setLoading] = useState(true);

    const [postoId, setPostoId] = useState('');
    const [postoName, setPostoNome] = useState('');

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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resposta = await axios.get(`/venda/${postoId}/vendasPorPosto/`);
                setDadosVenda(resposta.data);
                setLoading(false);
                // console.log(resposta.data);
            } catch (error) {
                console.error('Erro ao obter dados de venda:', error);
            }
        };

        if (postoId) {
            fetchData();
        }
    }, [postoId]);


    if (loading) {
        return (
          // Mostrar Spinner enquanto os dados estão sendo carregados
          <Flex
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Spinner
          thickness="4px"
          speed="0.70s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
        );
      }

    const ultimaVendaGasolina = dadosVenda.length > 0
        ? dadosVenda.slice().reverse().find((venda) => venda.tipo_combustivel === 3)
        : null;

    const ultimaVendaEtanol = dadosVenda.length > 0
        ? dadosVenda.slice().reverse().find((venda) => venda.tipo_combustivel === 4)
        : null;

    const ultimaGasolinaA = dadosVenda.length > 0
        ? dadosVenda.slice().reverse().find((venda) => venda.tipo_combustivel === 5)
        : null;

    const ultimaVendaDisel = dadosVenda.length > 0
        ? dadosVenda.slice().reverse().find((venda) => venda.tipo_combustivel === 6)
        : null;

    const ultimaVendaDiselS = dadosVenda.length > 0
        ? dadosVenda.slice().reverse().find((venda) => venda.tipo_combustivel === 7)
        : null;


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

                <Heading textAlign={'center'} fontWeight={'15px'} >
                    Ganhos
                    <Tooltip label="Direcione-se à opção de Cadastro." fontSize="md" >
                        <QuestionOutlineIcon className="small-icon" style={{ transform: 'scale(0.5)' }} />
                    </Tooltip></Heading>
                <Divider marginTop={'1rem'} />

                <Heading size={'md'} marginTop={'3rem'} marginBottom={'0.5rem'} fontWeight={'15px'}>Valor da última venda (Litro)</Heading>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    <CaixaInfo title={'Gasolina Comum'} info={`R$ ${ultimaVendaGasolina?.preco_litro} ` || 'Sem informação'} />
                    <CaixaInfo title={'Gasolina Aditivada'} info={`R$ ${ultimaGasolinaA?.preco_litro} ` || 'Sem informação'} />
                    <CaixaInfo title={'Etanol'} info={`R$ ${ultimaVendaEtanol?.preco_litro} ` || 'Sem informação'} />
                    <CaixaInfo title={'Disel Comum'} info={`R$ ${ultimaVendaDisel?.preco_litro} ` || 'Sem informação'} />
                    <CaixaInfo title={'Disel S10'} info={`R$ ${ultimaVendaDiselS?.preco_litro} ` || 'Sem informação'} />
                </SimpleGrid>

                <Heading size={'md'} marginTop={'3rem'} marginBottom={'0.5rem'} fontWeight={'15px'}>Volume da última venda</Heading>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    <CaixaInfo title={'Gasolina Comum'} info={`${ultimaVendaGasolina?.volume_venda} Litros`} />
                    <CaixaInfo title={'Gasolina Aditivada'} info={`${ultimaGasolinaA?.volume_venda} Litros`} />
                    <CaixaInfo title={'Etanol'} info={`${ultimaVendaEtanol?.volume_venda} Litros`} />
                    <CaixaInfo title={'Disel Comum'} info={`${ultimaVendaDisel?.volume_venda} Litros`} />
                    <CaixaInfo title={'Disel S10'} info={`${ultimaVendaDiselS?.volume_venda} Litros`} />
                </SimpleGrid>

                {/* <Flex marginTop={'10'} justifyContent={'flex-end'}>
                    <AlertaUltimaAtualizacao dataHora={'dia tal hora tal'} />
                </Flex> */}

                <Divider marginTop={'1rem'} marginBottom={'3rem'} />
                <Rodape />

            </Grid>
        </ChakraProvider>
    );
}

export default Ganhos;
