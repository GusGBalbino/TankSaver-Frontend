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
    NumberDecrementStepper,
    NumberInputStepper,
    NumberIncrementStepper,
    Divider,
    VStack,
    InputLeftAddon,
} from '@chakra-ui/react';
import { BotaoAlteracao } from '../Botoes/BotaoAlteracao';


export function CadastrarTaxas() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [postoName, setPostoNome] = useState('');
    const [postoId, setPostoId] = useState('');
    const [telefoneFormatado, setTelefoneFormatado] = useState('');


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


    const adicionarTaxa = async () => {
        const token = localStorage.getItem('token');
        console.log('Token:', token);
        console.log('Request Data:', { nome, posto: postoId });

        try {
            const response = await axios.post('/taxa/', {
                nome, posto: postoId
            });
            console.log('Responsável adicionado com sucesso:', response.data);
        } catch (error) {
            console.error('Erro ao adicionar responsável:', error);
            console.log('Erro na resposta:', error.response);
        }
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
                onClick={onOpen}>
                Cadastrar
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    <ModalHeader>Cadastro de Taxas</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Selecione o tipo de taxa</FormLabel>

                            <Select marginBottom={'15px'} variant='filled' placeholder='Selecione' >
                                <option value='option1'>Option 1</option>

                            </Select>

                            <FormLabel>Nome da Taxa</FormLabel>
                            <Input onChange={(e) => setNome(e.target.value)} marginBottom={'15px'} variant='filled' />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={adicionarTaxa}>
                            Salvar
                        </Button>
                        <Button onClick={onClose}>Cancelar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
