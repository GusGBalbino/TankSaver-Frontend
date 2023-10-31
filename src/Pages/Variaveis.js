import React from 'react';
import {
    ChakraProvider,
    Grid,
    theme,
    Box,
} from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import Sidebar from './Sidebar';

function Variaveis() {
    return (
        <ChakraProvider theme={theme}>
            <Grid
                templateColumns="1fr 3fr"
                width="100vw"
                minHeight="100vh"
                p={8}
                bgColor="#F5F5F5"
            >
            <Sidebar />
            <Box marginLeft="150px">
                <Text fontSize="6xl" mb={4}>
                    VARIÁVEIS
                </Text>
            </Box>
            </Grid>
        </ChakraProvider>
    );
}

export default Variaveis;
