import React, { useState } from "react"
import { Box, HStack, useDisclosure } from '@chakra-ui/react'
import { Alert, AlertTitle, AlertDescription, CloseButton, Button } from '@chakra-ui/react';
import { BotaoAlerta } from "../Botoes/BotaoAlerta";

const ButtonProps = [
  { title: String },
  { description: String }
]


export function AlertaAtualizarDados(props = ButtonProps) {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: false })

  return  isVisible ? (
    <Box position={'fixed'} top={0} bottom={0} right={0} left={0} bg={'rgb(0,0,0, 0.7)'} zIndex={'1000'}>
         <Alert
        position={'fixed'}
        top={'50%'}
        left={'50%'}
        transform={'translate(-50%, -50%)'}

        flexDirection='column'


        alignItems='center'
        justifyContent='center'
        textAlign='center'
        H='50vh'
        borderRadius={'18px'}
        bg={'#FFBB0D'}
        textColor={'#131328'}
        status='warning'
        variant='solid'
        w='40vw'
        gap='20px'
      >
        <CloseButton alignSelf='flex-end' onClick={onClose} />

        <AlertTitle mt={-25} mb={1} fontSize='lg'>
          {props.title}
        </AlertTitle>

        <AlertDescription maxWidth='sm'>
          {props.description}
        </AlertDescription>

        <HStack>
          <BotaoAlerta link={'/custos'} name={'Atualizar custos'} />
          <BotaoAlerta link={'/ganhos'} name={'Atualizar ganhos'} />
          <BotaoAlerta link={'/perfil'} name={'Atualizar variáveis'} />
        </HStack>
      </Alert>
    </Box>
  ) : (
    <Button id={'submit-btn'} _hover={{ bg: '#FFBB0D', textColor: '#131328', borderColor: '#131328' }} onClick={onOpen}>Aqui vai a condição de quando o botao vai aparecer</Button>
    )
}