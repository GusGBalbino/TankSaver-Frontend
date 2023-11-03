import React from 'react';
import { Button, VStack } from '@chakra-ui/react';


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
                borderColor={'#131328'}
                justifyContent="flex-start"
                _hover={{ bg: '#FFBB0D', textColor: '#131328', borderColor: '#131328' }}
            >
                {props.name}

            </Button>
        </VStack>
    )
}