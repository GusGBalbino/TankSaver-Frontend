import React from 'react';
import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    FormControl,
    useDisclosure,
    ModalOverlay,
    FormLabel,
    Input,
    Select,
    Divider,
    Flex
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

export function CardPerfil() {
    const { isOpen, onOpen, onClose } = useDisclosure();

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
                onClick={onOpen}
            >
                <Flex align="center"> {/* Use o Flex para alinhar o ícone e o texto */}
                    <EditIcon mr={2} /> {/* Adicione margem à direita (mr) para separar o ícone do texto */}
                    Editar Dados
                </Flex>
            </Button>


            <Modal isOpen={isOpen} onClose={onClose} size={'md'}>
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader>Editar Dados</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl mb={2}>
                            <FormLabel bg="#131328" color="white" borderRadius="3">Nome Fantasia</FormLabel>
                            <Input placeholder='Nome Fantasia...' color="black" _placeholder={{ color: 'black.500' }} bg="white" />

                            <FormLabel bg="#131328" color="white" borderRadius="3"  mb={2}>Usuário</FormLabel>
                            <Input placeholder='Usuário...' color="black" _placeholder={{ color: 'black.500' }} bg="white" />

                            <FormLabel bg="#131328" color="white" borderRadius="3"  mb={2}>CNPJ</FormLabel>
                            <Input placeholder='CNPJ...' color="black" _placeholder={{ color: 'black.500' }} bg="white"/>

                            <FormLabel bg="#131328" color="white" borderRadius="3"  mb={2}>Telefone Empresarial</FormLabel>
                            <Input placeholder='(XX) X XXXX-XXXX...' color="black" _placeholder={{ color: 'black.500' }} bg="white" />

                            <FormLabel bg="#131328" color="white" borderRadius="3"  mb={2}>Endereço</FormLabel>
                            <Input placeholder='Endereço...' color="black" _placeholder={{ color: 'black.500' }} bg="white" />

                            <FormLabel bg="#131328" color="white" borderRadius="3"  mb={2}>CEP</FormLabel>
                            <Input placeholder='CEP...' color="black" _placeholder={{ color: 'black.500' }} bg="white" />

                            <FormLabel bg="#131328" color="white" borderRadius="3"  mb={2}>Município</FormLabel>
                            <Input placeholder='Município...' color="black" _placeholder={{ color: 'black.500' }} bg="white"/>

                            <FormLabel bg="#131328" color="white" borderRadius="3"  mb={2}>UF</FormLabel>
                            <Input placeholder='UF...' color="black" _placeholder={{ color: 'black.500' }} bg="white"/>

                            <FormLabel bg="#131328" color="white" borderRadius="3" mb={2}>E-mail</FormLabel>
                            <Input type='email' placeholder='E-mail...' color="black" _placeholder={{ color: 'black.500' }} bg="white" />

                            <FormLabel bg="#131328" color="white" borderRadius="3" mb={2}>Responsável pela Empresa</FormLabel>
                            <Input placeholder='Responsável pela Empresa...'  color="black" _placeholder={{ color: 'black.500' }} bg="white"/>

                            <FormLabel bg="#131328" color="white" borderRadius="3" mb={2}>Telefone</FormLabel>
                            <Input placeholder='(XX) X XXXX-XXXX...'  color="black" _placeholder={{ color: 'black.500' }} bg="white"/>
                        </FormControl>
                    </ModalBody>
                    <Divider marginTop={'1rem'} />
                    <Flex justifyContent="flex-end">
                        <Button colorScheme='blue' mr={3}>
                            Salvar
                        </Button>
                        <Button onClick={onClose}>Cancelar</Button>
                    </Flex>
                </ModalContent>
            </Modal>
        </>
    );
}
