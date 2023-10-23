import React from "react"
import { VStack, useDisclosure } from '@chakra-ui/react'
import { Alert, AlertIcon, Box, AlertTitle, AlertDescription, CloseButton, Button} from '@chakra-ui/react';
import { OpcoesSidebar } from "../Botoes/OpcoesSidebar";
import { BotaoAlerta } from "../Botoes/BotaoAlerta";

export function AlertaBotao() {
    const {
      isOpen: isVisible,
      onClose,
      onOpen,
    } = useDisclosure({ defaultIsOpen: true })
  
    return isVisible ? (
        <Alert borderRadius={'18px'} bg={'#FFBB0D'} textColor={'#131328'} status='warning' variant='solid'>

        <VStack spacing={8}>
          <AlertTitle>COMPRA DE COMBUSTÍVEIS</AlertTitle>

          <AlertDescription>
            Comprou mais combustível?
          </AlertDescription>

          <BotaoAlerta/>
        </VStack>

        <CloseButton
          alignSelf='flex-start'
          position='relative'
          right={-1}
          top={-1}
          onClick={onClose}
        />
      </Alert>

    ) : (
      <Button onClick={onOpen}>Aqui vai a condição de quando o botao vai aparecer</Button>
    )
  }