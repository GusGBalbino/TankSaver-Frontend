import React from 'react';
import {
  ChakraProvider,
  Text,
  VStack,
  Grid,
  theme,
  Avatar,
  Flex
} from '@chakra-ui/react';
import { Logo } from '../Logo';
import { OpcoesSidebar } from '../components/OpcoesSidebar/OpcoesSidebar';
import FotoPosto from '../image/foto-posto.jpg'

function Sidebar() {
  return (
    <ChakraProvider theme={theme}>

      <Grid
        display={'flex'}
        flexDirection={'column'}
        width="13%"
        minHeight="100vh"
        p={8}
        bgColor={'#131328'}>

        <VStack spacing={5} >
          <Avatar
            name='Logo da empresa'
            src={FotoPosto} />{' '}

          <Text
            align={'center'}
            fontSize='xl'
            color={'#FFBB0D'}>
            Posto Fulano de Tal
          </Text>

          <OpcoesSidebar />
          <OpcoesSidebar />
          <OpcoesSidebar />
          <OpcoesSidebar />
          <OpcoesSidebar />
        </VStack>

        <Logo marginTop={'100%'} />

      </Grid>

    </ChakraProvider>
  );
}

export default Sidebar;
