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
    const [total_folha, setTotalFolha] = useState(0);
    // const [valueSalario, setValueSalario] = React.useState('')
    const [posto, setPosto] = useState(''); // Estado para armazenar o posto selecionado
    const [postos, setPostos] = useState([]); // Estado para armazenar a lista de postos




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
        const token = localStorage.getItem('accessToken');
        if (!token) {
            console.error('No token found');
            return;
        }

        const funcionarioData = {
            nome,
            cargo,
            total_folha,
            posto,
        };
        
        axios.post('http://localhost:8000/funcionario/', funcionarioData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            console.log('Dados salvos com sucesso!', response.data);
            onClose(); // Fechar o modal após salvar
        })
        .catch(error => {
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
                                    setTotalFolha(numericValue);
                                }}
                                value={total_folha}
                                marginBottom={'15px'}
                            >
                                <NumberInputField />
                            </NumberInput>

                            {/* Campo de seleção para o posto */}
                            <FormLabel>Posto</FormLabel>
                            <Input value={posto} onChange={(e) => setPosto(e.target.value)} marginBottom={'15px'} variant='filled' />
                            {/* <select
                                value={posto}
                                onChange={(e) => setPosto(e.target.value)}
                            >
                                <option value="">Selecione um posto</option>
                                {postos.map((p) => (
                                    <option key={p.id} value={p.id}>
                                        {p.nome_fantasia}
                                    </option>
                                ))}
                            </select> */}


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