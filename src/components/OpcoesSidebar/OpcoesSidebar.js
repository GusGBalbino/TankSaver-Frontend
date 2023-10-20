import React from 'react';
import { Button } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

const textoOpcoes = ['Nome Button']

export const OpcoesSidebar = props => {
    return (
        
        <Button leftIcon={<EmailIcon color={'#FFBB0D'} />} variant='outline' textColor={'white'} borderColor={'#8D7843'} >
            {textoOpcoes.map((texto) => (
            <p>{texto}</p>
          ))} 
        </Button>

        
    )

}

