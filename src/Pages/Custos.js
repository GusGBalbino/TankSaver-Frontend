import React from 'react';
import {
    ChakraProvider,
    VStack,
    Grid,
    theme,
} from '@chakra-ui/react';
import { EditIcon, CheckIcon } from '@chakra-ui/icons'
import { Text } from '@chakra-ui/react';


function Custo() {
    return (
        <ChakraProvider theme={theme}>
            <Grid
                display={'flex'}
                flexDirection={'column'}
                width={'100vw'}
                minHeight="100vh"
                p={8}
                bgColor={'#F5F5F5'}>
                <Text fontSize='6xl'> Custo</Text>
            </Grid>
        </ChakraProvider>
    );
}

export default Custo;
