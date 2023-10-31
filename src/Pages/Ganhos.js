import React from 'react';
import {
    ChakraProvider,
    Grid,
    theme,
} from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

function Ganhos() {
    return (
        <ChakraProvider theme={theme}>
            <Grid
                display={'flex'}
                flexDirection={'column'}
                width={'100vw'}
                minHeight="100vh"
                p={8}
                bgColor={'#F5F5F5'}>
                <Text fontSize='6xl'> Ganhos</Text>
            </Grid>
        </ChakraProvider>
    );
}

export default Ganhos;
