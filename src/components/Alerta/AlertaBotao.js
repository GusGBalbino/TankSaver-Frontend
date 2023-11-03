import React from "react"
import { useDisclosure } from '@chakra-ui/react'
import { Alert, AlertTitle, AlertDescription, AlertIcon, CloseButton, Button } from '@chakra-ui/react';
import { BotaoAlerta } from "../Botoes/BotaoAlerta";

const ButtonProps = [
  { title: String },
  { description: String }
]

export function AlertaBotao(props = ButtonProps) {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true })

  return isVisible ? (
    <Alert
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      textAlign='center'
      maxH='50vh'
      borderRadius={'18px'}
      bg={'#FFBB0D'}
      textColor={'#131328'}
      status='warning'
      variant='solid'
      maxW='30vw'
      gap='20px'
    >
      <CloseButton alignSelf='flex-end' onClick={onClose}/>

      <AlertTitle mt={-25} mb={1} fontSize='lg'>
        {props.title}
      </AlertTitle>

      <AlertDescription maxWidth='sm'>
        {props.description}
      </AlertDescription>

      <BotaoAlerta />
    </Alert>

  ) : (
    <Button _hover={{ bg: '#FFBB0D', textColor: '#131328', borderColor: '#131328' }} onClick={onOpen}>Aqui vai a condição de quando o botao vai aparecer</Button>
  )
}