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

axios.defaults.baseURL = "https://tanksaver-backend.onrender.com";

function Custos() {
    const [dadosCompra, setDadosCompra] = useState([]);
    const [dadosCusto, setDadosCusto] = useState([]);
    const [dadosTaxas, setDadosTaxas] = useState([]);
    const [dadosFuncionario, setDadosFuncionario] = useState([]);
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
        const fetchDataCompra = async () => {
            try {
                const resposta = await axios.get(`https://tanksaver-backend.onrender.com/compra/${postoId}/comprasPorPosto/`);
                setDadosCompra(resposta.data);
                setLoading(false);

            } catch (error) {
                console.error('Erro ao obter dados de compra:', error);
            }
        };

        const fetchDataCusto = async () => {
            try {
                const resposta = await axios.get(`https://tanksaver-backend.onrender.com/custos/${postoId}/custosPorPosto/`);
                setDadosCusto(resposta.data);
            } catch (error) {
                console.error('Erro ao obter dados de custo:', error);
            }
        };

        const fetchDataTaxa = async () => {
            try {
                const resposta = await axios.get(`https://tanksaver-backend.onrender.com/taxas/${postoId}/taxasPorPosto/`);
                setDadosTaxas(resposta.data);
            } catch (error) {
                console.error('Erro ao obter dados de taxas:', error);
            }
        };

        const fetchDataFuncionario = async () => {
            try {
                const resposta = await axios.get(`https://tanksaver-backend.onrender.com/funcionario/${postoId}/funcionariosPorPosto/`);
                setDadosFuncionario(resposta.data);
            } catch (error) {
                console.error('Erro ao obter dados de compra:', error);
            }
        };

    if (postoId) {
        fetchDataCompra();
        fetchDataCusto();
        fetchDataTaxa();
        fetchDataFuncionario();
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

    const ultimosCustos = dadosCusto.length > 0
        ? dadosCusto.slice().reverse().find((custo) => custo.iptu)
        : null;

    const ultimasTaxas = dadosTaxas.length > 0
        ? dadosTaxas.slice().reverse().find((taxas) => taxas)
        : null;

    const ultimaCompraGasolina = dadosCompra.length > 0
        ? dadosCompra.slice().reverse().find((compra) => compra.tipo_combustivel === 3)
        : null;

    const ultimaCompraEtanol = dadosCompra.length > 0
        ? dadosCompra.slice().reverse().find((compra) => compra.tipo_combustivel === 4)
        : null;

    const ultimaGasolinaA = dadosCompra.length > 0
        ? dadosCompra.slice().reverse().find((compra) => compra.tipo_combustivel === 5)
        : null;

    const ultimaCompraDisel = dadosCompra.length > 0
        ? dadosCompra.slice().reverse().find((compra) => compra.tipo_combustivel === 6)
        : null;

    const ultimaCompraDiselS = dadosCompra.length > 0
        ? dadosCompra.slice().reverse().find((compra) => compra.tipo_combustivel === 7)
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

                <Heading textAlign={'center'} fontWeight={'15px'}>
                    Custos
                    <Tooltip label="Direcione-se à opção de Cadastro." fontSize="md" >
                        <QuestionOutlineIcon className="small-icon" style={{ transform: 'scale(0.5)' }} />
                    </Tooltip>
                </Heading>
                <Divider marginTop={'1rem'} />

                <Heading size={'md'} marginTop={'3rem'} marginBottom={'0.5rem'} fontWeight={'15px'}>Valor total da última compra de combustíveis (por litro)</Heading>

                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    <CaixaInfo title={'Gasolina Comum'} info={`R$ ${ultimaCompraGasolina?.preco_litro} ` || 'Sem informação'} />
                    <CaixaInfo title={'Gasolina Aditivada'} info={`R$ ${ultimaGasolinaA?.preco_litro} ` || 'Sem informação'} />
                    <CaixaInfo title={'Etanol'} info={`R$ ${ultimaCompraEtanol?.preco_litro} ` || 'Sem informação'} />
                    <CaixaInfo title={'Disel Comum'} info={`R$ ${ultimaCompraDisel?.preco_litro} ` || 'Sem informação'} />
                    <CaixaInfo title={'Disel S10'} info={`R$ ${ultimaCompraDiselS?.preco_litro} ` || 'Sem informação'} />
                    
                </SimpleGrid>

                <Heading size={'md'} marginTop={'3rem'} marginBottom={'0.5rem'} fontWeight={'15px'}>Valor dos últimos custos</Heading>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    <CaixaInfo title={'IPTU'} info={`R$ ${ultimosCustos?.iptu} ` || 'Sem informação'} />
                    <CaixaInfo title={'Custos Operacionais'} info={`R$ ${ultimosCustos?.custos_operacionais} ` || 'Sem informação'} />
                    <CaixaInfo title={'Honorários'} info={`R$ ${ultimosCustos?.honorarios_contabeis} ` || 'Sem informação'} />
                    <CaixaInfo title={'Água'} info={`R$ ${ultimosCustos?.agua} ` || 'Sem informação'} />
                    <CaixaInfo title={'Luz'} info={`R$ ${ultimosCustos?.luz} ` || 'Sem informação'} />
                    <CaixaInfo title={'Telefone e Internet'} info={`R$ ${ultimosCustos?.telefone_internet} ` || 'Sem informação'} />
                    <CaixaInfo title={'Softwares'} info={`R$ ${ultimosCustos?.softwares} ` || 'Sem informação'} />
                </SimpleGrid>

                <Heading size={'md'} marginTop={'3rem'} marginBottom={'0.5rem'} fontWeight={'15px'}>Valor das últimas taxas e impostos</Heading>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    <CaixaInfo title={'AGEFIS'} info={`% ${ultimasTaxas?.agefis} ` || 'Sem informação'} />
                    <CaixaInfo title={'IBRAN'} info={`% ${ultimasTaxas?.ibran} ` || 'Sem informação'} />
                    <CaixaInfo title={'IBAMA'} info={`% ${ultimasTaxas?.ibama} ` || 'Sem informação'} />
                    <CaixaInfo title={'Bandeira'} info={`% ${ultimasTaxas?.comissao_bandeira} ` || 'Sem informação'} />
                    <CaixaInfo title={'Impostos Recolhidos'} info={`% ${ultimasTaxas?.impostos_recolhidos} ` || 'Sem informação'} />
                </SimpleGrid>


                <Heading size={'md'} marginTop={'3rem'} marginBottom={'0.5rem'} fontWeight={'15px'}>Valor gasto com funcionários</Heading>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    {dadosFuncionario.map((funcionario) => (
                        <CaixaInfo
                            key={funcionario.id} // Certifique-se de ter uma chave única para cada elemento na lista
                            title={funcionario.nome} // Supondo que "nome" seja o campo que contém o nome do funcionário
                            info={`R$ ${funcionario.total_folha} ` || 'Sem informação'}
                        />
                    ))}
                </SimpleGrid>

                <Divider marginTop={'1rem'} marginBottom={'3rem'} />
                <Rodape />

            </Grid>
        </ChakraProvider>
    );
}

export default Custos;
