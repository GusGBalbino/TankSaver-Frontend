import React from 'react';
import { Button, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export function OpcoesSidebar(props) {
    return (
        <VStack alignItems="start" spacing={2} w="100%">
            <Button
                leftIcon={props.icon}
                minW={['8rem', '8rem']}
                maxW={['8rem', '8rem']}
                marginBottom={'15px'}
                variant='outline'
                textColor={'white'}
                borderColor={'#8D7843'}
                justifyContent="flex-start"
            >
                {props.name}

            </Button>
        </VStack>
    )
}