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
    Tooltip,
    Input,
    InputLeftElement,
    InputGroup,
    useToast
} from '@chakra-ui/react';
import { QuestionOutlineIcon } from '@chakra-ui/icons';

export function CadastrarTaxas() {
    const [ibran, setValorIBRAN] = useState(0);
    const [ibama, setValorIBAMA] = useState(0);
    const [agefis, setValorAGEFIS] = useState(0);
    const [comissao_bandeira, setValorBandeira] = useState(0);
    const [impostos_recolhidos, setValorImposto] = useState(0);

    const [postoName, setPostoNome] = useState('');
    const [postoId, setPostoId] = useState('');

    const toast = useToast();

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

    const adicionarTaxas = async () => {
        const token = localStorage.getItem('token');
        console.log('Token:', token);
        console.log('Request Data:', {
            ibran,
            ibama,
            agefis,
            comissao_bandeira,
            impostos_recolhidos,
            posto: postoId
        });

        try {
            const response = await axios.post('http://localhost:8000/taxas/', {
                ibran,
                ibama,
                agefis,
                comissao_bandeira,
                impostos_recolhidos,
                posto: postoId
            });

            toast({
                position: 'top',
                title: 'Cadastrado com sucesso',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });

            onClose();
        } catch (error) {
            console.error('Erro ao adicionar taxas:', error);
            console.log('Erro na resposta:', error.response);
        }
    };

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
                onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                    Cadastro de taxas e impostos
                        <Tooltip label="Os valores a serem inseridos devem ser o total pago por cada taxa e imposto." fontSize="md" >
                            <QuestionOutlineIcon className="small-icon" style={{ transform: 'scale(0.5)' }} />
                        </Tooltip>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>

                            <FormLabel>Valor pago para o IBRAN</FormLabel>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    children='R$'
                                />
                                <Input
                                    marginBottom={'15px'}
                                    bg={'gray.100'}
                                    onChange={(e) => setValorIBRAN(e.target.value)} />
                            </InputGroup>

                            <FormLabel>Valor pago para o IBAMA</FormLabel>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    children='R$'
                                />
                                <Input
                                    marginBottom={'15px'}
                                    bg={'gray.100'}
                                    onChange={(e) => setValorIBAMA(e.target.value)} />
                            </InputGroup>

                            <FormLabel>Valor pago para o AGEFIS</FormLabel>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    children='R$'
                                />
                                <Input
                                    marginBottom={'15px'}
                                    bg={'gray.100'}
                                    onChange={(e) => setValorAGEFIS(e.target.value)} />
                            </InputGroup>

                            <FormLabel>Valor pago da comissão da bandeira</FormLabel>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    children='R$'
                                />
                                <Input
                                    marginBottom={'15px'}
                                    bg={'gray.100'}
                                    onChange={(e) => setValorBandeira(e.target.value)} />
                            </InputGroup>

                            <FormLabel>Valor pago de impostos</FormLabel>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    children='R$'
                                />
                                <Input
                                    marginBottom={'15px'}
                                    bg={'gray.100'}
                                    onChange={(e) => setValorImposto(e.target.value)} />
                            </InputGroup>

                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={adicionarTaxas} colorScheme='blue' mr={3}>
                            Salvar
                        </Button>
                        <Button onClick={onClose}>Cancelar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}