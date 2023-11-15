import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    FormControl,
    useDisclosure,
    ModalOverlay,
    FormLabel,
    Text,
    Card,
    CardHeader,
    CardBody,
    Select,
    Input,
    NumberInputField,
    NumberInput,
    InputLeftElement,
    InputGroup,
    NumberInputStepper,
    NumberIncrementStepper,
    Divider,
    VStack,
    Heading,
} from '@chakra-ui/react';

import { format } from 'date-fns';
import { BotaoAlteracao } from '../Botoes/BotaoAlteracao';

const InfoProps = {
    title: String,
    info: String,
    editor: String,
    infoSelect: String,
};

export function CardCadastroCompra(props = InfoProps) {
    const [tipo_combustiveis, setCombustiveis] = useState([]);
    const [tipo_combustivel, SetTipo] = useState('');
    const [volume_compra, SetVolume] = useState('');
    const [preco_litro, setValorCompra] = useState(0);
    const [data_compra, SetDataCompra] = useState('');

    const [postoName, setPostoNome] = useState('');

    const [postoId, setPostoId] = useState('');

    useEffect(() => {
        const fetchCombustiveis = async () => {
            try {
                const response = await axios.get('http://localhost:8000/tipoDeCombustivel/'); 
                console.log("resposta dos tipos de combustiveis", response.data);
                setCombustiveis(response.data); 
            } catch (error) {
                console.error('Erro ao obter opções de combustível:', error);
            }
        };

        fetchCombustiveis();
    }, []);

    useEffect(() => {
        const storedPostoId = localStorage.getItem('postoId');
        const storedPostoName = localStorage.getItem('postoName');
        console.log('Stored Posto ID:', storedPostoId);
        console.log('Stored Posto Name:', storedPostoName);
        if (storedPostoId && storedPostoName) {
            setPostoId(storedPostoId);
            setPostoNome(storedPostoName);
        }
    }, []);

    const adicionarCompra = async () => {
        const token = localStorage.getItem('token');
    console.log('Token:', token);
    console.log('Request Data:', {
        tipo_combustivel: tipo_combustivel, 
        volume_compra,
        preco_litro,
        data_compra,
        posto: postoId
    });

    try {
        const response = await axios.post('http://localhost:8000/compra/', {
            tipo_combustivel,
            volume_compra,
            preco_litro,
            data_compra: format(new Date(data_compra), 'yyyy-MM-dd'),
            posto: postoId
        });
        console.log('Compra adicionada com sucesso:', response.data);
    } catch (error) {
        console.error('Erro ao adicionar compra:', error);
        console.log('Erro na resposta:', error.response);
    }
    };

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

    return (
        <>
            <Button
                minW={['10rem', '10rem']}
                maxW={['10rem', '10rem']}
                marginBottom={'15px'}
                variant='outline'
                textColor={'black'}
                borderColor={'#131328'}
                _hover={{ bg: '#FFBB0D', textColor: '#131328', borderColor: '#131328' }}

                onClick={() => {
                    setOverlay(<OverlayOne />)
                    onOpen()
                }}
            >Cadastrar</Button>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Cadastro de compra</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Selecione o tipo de combustível</FormLabel>

                            <Select
                                marginBottom={'15px'}
                                value={tipo_combustivel}
                                variant='filled'
                                placeholder='Selecione'
                                onChange={(e) => SetTipo(e.target.value)}
                            >
                                {tipo_combustiveis.map((tipo_combustivel) => (
                                    <option key={tipo_combustivel.id} value={tipo_combustivel.id}>
                                        {tipo_combustivel.tipo_combustivel}
                                    </option>
                                ))}
                            </Select>

                            <FormLabel>Volume de compra em litros</FormLabel>
                            <NumberInput
                                marginBottom={'15px'}
                                variant='filled'
                                placeholder='Insira o volume da compra em litros'>
                                <NumberInputField
                                    onChange={(e) => SetVolume(e.target.value)}
                                />
                            </NumberInput>

                            <FormLabel>Valor de compra por litro</FormLabel>
                            <InputGroup>
                                <InputLeftElement

                                    pointerEvents='none'
                                    children='R$'
                                />
                                <Input
                                    marginBottom={'15px'}
                                    bg={'gray.100'}
                                    onChange={(e) => setValorCompra(e.target.value)} />
                            </InputGroup>

                            {/* <NumberInput
                                variant='filled'
                                onChange={setValueCompra}
                                value={format(valueCompra)}
                                max={50}
                                marginBottom={'15px'}
                            >
                                <NumberInputField />
                            </NumberInput> */}

                            <FormLabel>Data da compra</FormLabel>
                            <Input
                                onChange={(e) => SetDataCompra(e.target.value)}
                                marginBottom={'15px'}
                                variant='filled'
                                placeholder="Select Date"
                                size="md"
                                type="date"
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={adicionarCompra} colorScheme='blue' mr={3}>
                            Salvar
                        </Button>
                        <Button onClick={onClose}>Cancelar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>


    )
}