import React from 'react';
import { IconButton, Flex } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons'

export function BotaoEditar() {
    return (
        <Flex marginTop={'2'} justifyContent={'flex-end'}>
            <IconButton size={'sm'} aria-label='Search database' icon={<EditIcon />} />
        </Flex>
    )
}