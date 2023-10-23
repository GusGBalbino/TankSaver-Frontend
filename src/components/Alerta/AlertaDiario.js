import React from "react"
import { VStack, useDisclosure } from '@chakra-ui/react'
import { Alert, AlertIcon, Box, AlertTitle, AlertDescription, CloseButton, Button } from '@chakra-ui/react';
import { OpcoesSidebar } from "../Botoes/OpcoesSidebar";
import { BotaoAlerta } from "../Botoes/BotaoAlerta";

export function AlertaDiario() {
    const {
        isOpen: isVisible,
        onClose,
        onOpen,
    } = useDisclosure({ defaultIsOpen: true })

    return isVisible ? (
        <Alert borderRadius={'18px'} bg={'#FFBB0D'} textColor={'#131328'} status='warning' variant='solid'>

            <AlertIcon color={'#131328'}/>
            <VStack spacing={8}>
                <AlertTitle>COMPRA DE COMBUSTÍVEIS </AlertTitle>


                <AlertDescription>
                    Comprou mais combustível?
                </AlertDescription>

                <BotaoAlerta />
            </VStack>

        </Alert>

    ) : (
        <Button onClick={onOpen}>Aqui vai a condição de quando o botao vai aparecer</Button>
    )
}