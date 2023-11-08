import React, { useState, useEffect } from 'react';

import axios from 'axios'; // Importe a biblioteca axios
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
    Input,
    NumberInputField,
    NumberInput,
} from '@chakra-ui/react';
import { BotaoAlteracao } from '../Botoes/BotaoAlteracao';


export function CadastrarFuncionario() {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [total_folha, setSalario] = useState(0);
    // const [valueSalario, setValueSalario] = React.useState('')
    const [posto, setPosto] = useState(''); // Estado para armazenar o posto selecionado
    const [postos, setPostos] = useState([]); // Estado para armazenar a lista de postos

    useEffect(() => {
        // Busque os postos da API do Django ao carregar o componente
        axios.get('http://localhost:8000/posto_list')
            .then((response) => {
                setPostos(response.data);
            })
            .catch((error) => {
                console.error('Erro ao buscar os postos:', error);
            });
    }, []); // O segundo argumento vazio assegura que essa solicitação seja feita apenas uma vez



    // const format = (val) => `$ ` + val.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    // LÓGICA DE APARIÇÃO DO MODAL
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    //FILTRO DO MODAL
    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

    const handleSalvarClick = () => {
        // Crie um objeto com os dados a serem enviados para o backend
        const data = {
            nome,
            cargo,
            total_folha,
            posto,
        };

        // Faça uma solicitação POST para o endpoint do seu backend
        axios.post('http://localhost:8000/funcionario/', data)
            .then((response) => {
                // Se a solicitação for bem-sucedida, você pode realizar alguma ação, se necessário
                console.log('Dados salvos com sucesso!', response.data);
                onClose(); // Feche o modal após salvar
            })
            .catch((error) => {
                // Se ocorrer um erro na solicitação, você pode tratar o erro aqui
                console.error('Erro ao salvar os dados:', error);
            });
    };




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
                    <ModalHeader>Cadastro de funcionário</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>

                            <FormLabel>Nome</FormLabel>
                            <Input value={nome} onChange={(e) => setNome(e.target.value)} marginBottom={'15px'} variant='filled' />

                            <FormLabel>Cargo</FormLabel>
                            <Input value={cargo} onChange={(e) => setCargo(e.target.value)} marginBottom={'15px'} variant='filled' />

                            <FormLabel>Salário Bruto</FormLabel>
                            <NumberInput
                                variant='filled'
                                onChange={(valueString) => {
                                    const numericValue = parseFloat(valueString.replace(/[^0-9.-]+/g, ''));
                                    setSalario(numericValue);
                                }}
                                value={total_folha}
                                max={50}
                                marginBottom={'15px'}
                            >
                                <NumberInputField />
                            </NumberInput>

                            {/* Campo de seleção para o posto */}
                            <FormLabel>Posto</FormLabel>
                            <select
                                value={posto}
                                onChange={(e) => setPosto(e.target.value)}
                            >
                                <option value="">Selecione um posto</option>
                                {postos.map((posto) => (
                                    <option key={posto.id} value={posto.id}>
                                        {posto.nome}
                                    </option>
                                ))}
                            </select>


                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={handleSalvarClick} colorScheme='blue' mr={3}>
                            Salvar
                        </Button>
                        <Button onClick={onClose}>Cancelar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>


    )
}