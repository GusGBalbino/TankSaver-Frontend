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
    InputLeftAddon,
} from '@chakra-ui/react';
import { BotaoAlteracao } from '../Botoes/BotaoAlteracao';

const InfoProps = [
    { title: String },
    { info: String },
    { editor: String },
    { infoSelect: String },
]

export function AlterarResponsavel(props = InfoProps) {
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
                    <ModalHeader>Cadastro de responsável</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>

                        <FormLabel>Nome</FormLabel>
                        <Input marginBottom={'15px'} variant='filled' />

                        <FormLabel>CPF</FormLabel>
                        <Input marginBottom={'15px'} variant='filled' />
                        
                        <FormLabel>Email</FormLabel>
                        <Input marginBottom={'15px'} variant='filled' />


                        <FormLabel>Telefone</FormLabel>
                        <Input marginBottom={'15px'} variant='filled' />
                            

                           

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