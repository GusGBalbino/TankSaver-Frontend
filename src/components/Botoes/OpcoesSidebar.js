import React, { useState } from 'react';
import { Button, VStack } from '@chakra-ui/react';

export function OpcoesSidebar(props) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <VStack alignItems="start" spacing={2} w="100%">
            <Button
                leftIcon={React.cloneElement(props.icon, {
                    color: isHovered ? '#131328' : '#FFBB0D',
                })}
                minW={['8rem', '8rem']}
                maxW={['8rem', '8rem']}
                marginBottom={'15px'}
                variant='outline'
                color={isHovered ? '#131328' : 'white'}
                borderColor="#FFBB0D"
                justifyContent="flex-start"
                _hover={{
                    bg: '#FFBB0D',
                    color: '#131328',
                    borderColor: '#131328',
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {props.name}
            </Button>
        </VStack>
    );
}
