import React from 'react';
import { Button, Icon } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

const ButtonProps = [
    { name: String },
    { icon: String }
]

export function BotaoAlteracao(props = ButtonProps) {
    const buttonStyle = {
        float: 'right' 
    };

    return (
        <Button leftIcon={props.icon}
            minW={['10rem', '10rem']}
            maxW={['10rem', '10rem']}
            marginBottom={'2px'}
            variant='outline'
            textColor={'black'}
            style={buttonStyle}
            _hover={{ bg: '#FFBB0D', textColor: '#131328', borderColor: '#131328' }}
            borderColor={'black'} >
            {props.name}
        </Button>
    )
}
