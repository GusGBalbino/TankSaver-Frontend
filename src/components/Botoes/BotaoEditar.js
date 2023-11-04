import React from 'react';
import { IconButton, Flex } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons'

export function BotaoEditar({ onEditClick }) {
    return (
        <Flex marginTop={'2'} justifyContent={'flex-end'}>
            <IconButton
                size={'sm'}
                aria-label='Editar'
                icon={<EditIcon />}
                onClick={onEditClick} // Chama a função onEditClick quando o botão é clicado
            />
        </Flex>
    )
}
