import React from 'react';
import {
    ChakraProvider,
    Grid,
    theme,
    SimpleGrid,
    Flex,
    Heading,
    Divider,
} from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Rodape from '../components/Rodape/Rodape';

function Dashboard() {
    return (
        <ChakraProvider theme={theme}>

        <Grid
            display={'flex'}
            flexDirection={'column'}
            templateColumns={{ base: '1fr', md: '1fr 2fr' }}
            minHeight="100vh"
            p={8}
            bgColor={'#F5F5F5'}
            zIndex="1"
            marginLeft="13rem"
        >

            <Sidebar />
            <Heading textAlign={'center'}>Dashboard</Heading>

            <Divider marginTop={'1rem'}  marginBottom={'3rem'} />
            <Rodape/>

        </Grid>
    </ChakraProvider>
    );
}

export default Dashboard;
