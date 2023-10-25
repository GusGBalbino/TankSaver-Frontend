import React from 'react';
import { Button, Icon } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

const ButtonProps = [
    {name: String},
    {icon: String}
]

export function BotaoAlteracao(props = ButtonProps) {
    return (
        <Button leftIcon={props.icon} minW='10vw' marginBottom={'15px'} variant='outline' textColor={'#131328'} borderColor={'#8D7843'} >
                {props.name}
        </Button>
    )
}
