import React from 'react';
import { Button, Icon } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

const ButtonProps = [
    {name: String},
    {icon: String}
]

export function OpcoesSidebar(props = ButtonProps) {
    return (
        <Button leftIcon={props.icon} variant='outline' textColor={'white'} borderColor={'#8D7843'} >
                {props.name}
        </Button>
    )
}
