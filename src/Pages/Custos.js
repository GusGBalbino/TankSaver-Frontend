import React from 'react';
import {
    ChakraProvider,
    VStack,
    Grid,
    theme,
    Box
} from '@chakra-ui/react';
import { EditIcon, CheckIcon } from '@chakra-ui/icons'
import { Text } from '@chakra-ui/react';
import Sidebar from './Sidebar';

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
            <Sidebar />
            <Box marginLeft="150px">
                <Text fontSize="6xl" mb={4}>
                    CUSTOS
                </Text>
            </Box>
            </Grid>
        </ChakraProvider>
    );
}

export default Custo;
