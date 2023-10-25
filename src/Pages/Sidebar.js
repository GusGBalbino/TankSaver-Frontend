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

import { EmailIcon } from '@chakra-ui/icons';
import { Logo } from '../Logo';
import { OpcoesSidebar } from '../components/Botoes/OpcoesSidebar';
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
          <Text
            align={'center'}
            fontSize='xl'
            color={'#FFBB0D'}>
            Posto Fulano de Tal
          </Text>

          <OpcoesSidebar icon={<EmailIcon color={'#FFBB0D'} />} name={"Dashboard"} />
          <OpcoesSidebar icon={<EmailIcon color={'#FFBB0D'} />} name={"Ganhos"}/>
          <OpcoesSidebar icon={<EmailIcon color={'#FFBB0D'} />} name={"Custos"}/>
          <OpcoesSidebar icon={<EmailIcon color={'#FFBB0D'} />} name={"Variáveis"}/>
          <OpcoesSidebar icon={<EmailIcon color={'#FFBB0D'} />} name={"Perfil"}/>
        </VStack>

        <Logo marginTop={'100%'} />

      </Grid>

    </ChakraProvider>
  );
}

export default Sidebar;
