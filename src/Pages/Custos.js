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

function Custos() {
    const [dadosCompra, setDadosCompra] = useState([]);
    const [dadosCusto, setDadosCusto] = useState([]);
    const [dadosTaxas, setDadosTaxas] = useState([]);
    const [dadosFuncionario, setDadosFuncionario] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchDataCompra = async () => {
            try {
                const resposta = await axios.get('/compra/');
                setDadosCompra(resposta.data);
                setLoading(false);

            } catch (error) {
                console.error('Erro ao obter dados de compra:', error);
            }
        };

        const fetchDataCusto = async () => {
            try {
                const resposta = await axios.get('/custos/');
                setDadosCusto(resposta.data);
            } catch (error) {
                console.error('Erro ao obter dados de compra:', error);
            }
        };

        const fetchDataTaxa = async () => {
            try {
                const resposta = await axios.get('/taxas/');
                setDadosTaxas(resposta.data);
            } catch (error) {
                console.error('Erro ao obter dados de compra:', error);
            }
        };

        const fetchDataFuncionario = async () => {
            try {
                const resposta = await axios.get('/funcionario/');
                setDadosFuncionario(resposta.data);
            } catch (error) {
                console.error('Erro ao obter dados de compra:', error);
            }
        };

        fetchDataCompra();
        fetchDataCusto();
        fetchDataTaxa();
        fetchDataFuncionario();
    }, []);

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

                <Heading textAlign={'center'}>
                    Custos
                    <Tooltip label="Direcione-se à opção de Cadastro." fontSize="md" >
                        <QuestionOutlineIcon className="small-icon" style={{ transform: 'scale(0.5)' }} />
                    </Tooltip>
                </Heading>
                <Divider marginTop={'1rem'} />

                <Heading size={'md'} marginTop={'3rem'} marginBottom={'0.5rem'}>Valor total da última compra de combustíveis (por litro)</Heading>

                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    <CaixaInfo title={'Gasolina Comum'} info={`R$ ${ultimaCompraGasolina?.preco_litro} ` || 'Sem informação'} />
                    <CaixaInfo title={'Gasolina Aditivada'} info={`R$ ${ultimaGasolinaA?.preco_litro} ` || 'Sem informação'} />
                    <CaixaInfo title={'Etanol'} info={`R$ ${ultimaCompraEtanol?.preco_litro} ` || 'Sem informação'} />
                    <CaixaInfo title={'Disel Comum'} info={`R$ ${ultimaCompraDisel?.preco_litro} ` || 'Sem informação'} />
                    <CaixaInfo title={'Disel S10'} info={`R$ ${ultimaCompraDiselS?.preco_litro} ` || 'Sem informação'} />
                    <CaixaInfo title={'IPTU'} info={`R$ ${ultimosCustos?.iptu} ` || 'Sem informação'} />
                </SimpleGrid>

                <Heading size={'md'} marginTop={'3rem'} marginBottom={'0.5rem'}>Valor dos últimos custos</Heading>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    <CaixaInfo title={'IPTU'} info={`R$ ${ultimosCustos?.iptu} ` || 'Sem informação'} />
                    <CaixaInfo title={'Custos Operacionais'} info={`R$ ${ultimosCustos?.custos_operacionais} ` || 'Sem informação'} />
                    <CaixaInfo title={'Honorários'} info={`R$ ${ultimosCustos?.honorarios_contabeis} ` || 'Sem informação'} />
                    <CaixaInfo title={'Água'} info={`R$ ${ultimosCustos?.agua} ` || 'Sem informação'} />
                    <CaixaInfo title={'Luz'} info={`R$ ${ultimosCustos?.luz} ` || 'Sem informação'} />
                    <CaixaInfo title={'Telefone e Internet'} info={`R$ ${ultimosCustos?.telefone_internet} ` || 'Sem informação'} />
                    <CaixaInfo title={'Softwares'} info={`R$ ${ultimosCustos?.softwares} ` || 'Sem informação'} />
                </SimpleGrid>

                <Heading size={'md'} marginTop={'3rem'} marginBottom={'0.5rem'}>Valor das últimas taxas e impostos</Heading>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    <CaixaInfo title={'AGEFIS'} info={`R$ ${ultimasTaxas?.agefis} ` || 'Sem informação'} />
                    <CaixaInfo title={'IBRAN'} info={`R$ ${ultimasTaxas?.ibran} ` || 'Sem informação'} />
                    <CaixaInfo title={'IBAMA'} info={`R$ ${ultimasTaxas?.ibama} ` || 'Sem informação'} />
                    <CaixaInfo title={'Bandeira'} info={`R$ ${ultimasTaxas?.comissao_bandeira} ` || 'Sem informação'} />
                    <CaixaInfo title={'Outros Impostos'} info={`R$ ${ultimasTaxas?.impostos_recolhidos} ` || 'Sem informação'} />
                </SimpleGrid>


                <Heading size={'md'} marginTop={'3rem'} marginBottom={'0.5rem'}>Valor gasto com funcionários</Heading>
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
