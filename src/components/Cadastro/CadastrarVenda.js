import React from 'react';
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
    Heading,
} from '@chakra-ui/react';
import { BotaoAlteracao } from '../Botoes/BotaoAlteracao';

const InfoProps = [
    { title: String },
    { info: String },
    { editor: String },
    { infoSelect: String },
]



export function CadastrarVenda(props = InfoProps) {
    //FORMATAÇÃO PARA RECEBER EM REAIS
    const format = (val) => `$ ` + val.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    // const parse = (val) => val.replace(/^\$/, '')
    // var format = atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    const [valueVenda, setValueVenda] = React.useState('')

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
                    <ModalHeader>Cadastro de venda</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Selecione o tipo de pagamento</FormLabel>
                            <Select marginBottom={'15px'} value={props.infoSelect} variant='filled' placeholder='Selecione' >
                                <option value='option1'>Option 1</option>
                            </Select>

                            <FormLabel>Selecione o tipo de combustível</FormLabel>
                            <Select marginBottom={'15px'} value={props.infoSelect} variant='filled' placeholder='Selecione' >
                                <option value='option1'>Option 1</option>
                            </Select>

                            <FormLabel>Volume de venda</FormLabel>
                            <NumberInput marginBottom={'15px'} variant='filled' placeholder='Insira o volume da venda em litros'>
                                <NumberInputField />
                            </NumberInput>

                            <FormLabel>Valor de venda por litro</FormLabel>
                            <NumberInput
                                variant='filled'
                                onChange={setValueVenda}
                                value={format(valueVenda)}
                                max={50}
                                marginBottom={'15px'}
                            >
                                <NumberInputField />
                            </NumberInput>

                            <FormLabel>Data da venda</FormLabel>
                            <Input
                                marginBottom={'15px'}
                                variant='filled'
                                placeholder="Select Date and Time"
                                size="md"
                                type="datetime-local"
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            Salvar
                        </Button>
                        <Button onClick={onClose}>Cancelar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>


    )
}