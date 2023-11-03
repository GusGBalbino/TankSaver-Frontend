import React from 'react';
import { Button } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

const textoOpcoes = ['Atualizar Agora']

export const BotaoAlerta = props => {
    return (
        <Button variant='solid' textColor={'white'} bg={'#131328'} _hover={{ bg: '#24244A', borderColor: '#131328' }} >
            {textoOpcoes.map((texto) => (
                <p >{texto}</p>
            ))}
        </Button>
    )

}