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



export function CardCadastroCompra(props = InfoProps) {
    //FORMATAÇÃO PARA RECEBER EM REAIS
    const format = (val) => `R$ ` + val
    const parse = (val) => val.replace(/^\$/, '')

    const [value, setValue] = React.useState('0.0')

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
                justifyContent="flex-start"
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
                            <Select value={props.infoSelect} variant='filled' placeholder='Selecione'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>

                            <FormLabel>Volume de compra</FormLabel>
                            <Input variant='filled' placeholder='Filled' />

                            <FormLabel>Valor de compra por litro</FormLabel>
                            <NumberInput
                                variant='filled'
                                onChange={(valueString) => setValue(parse(valueString))}
                                value={format(value)}
                                max={50}
                            >
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>

                            <FormLabel>Data da compra</FormLabel>
                            <Input
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