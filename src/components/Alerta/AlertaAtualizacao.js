import React from 'react';
import { Alert, AlertIcon, CloseButton } from '@chakra-ui/react';

export const AlertaAtualizacao = props => {
    return (
        <Alert borderRadius={'18px'} bg={'#131328'} status='warning' variant='solid'>
            <AlertIcon color={'#FFBB0D'} />
            Ultima atualização:
        </Alert>

    )
}