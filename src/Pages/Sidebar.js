import React from 'react';
import {
  ChakraProvider,
  Text,
  VStack,
  Grid,
  theme,
  Avatar,
  Flex,
  GridItem
} from '@chakra-ui/react';

import { AiOutlineFundProjectionScreen, AiOutlineDollarCircle, AiFillCalculator, AiOutlineSliders, AiOutlineUser } from "react-icons/ai";
import { Logo } from '../Logo';
import { OpcoesSidebar } from '../components/Botoes/OpcoesSidebar';

function Sidebar() {
  return (
    <ChakraProvider theme={theme}>

      <Grid
        templateAreas={`"header header"
      "main"
      "footer"`}
        gap='75px'
        display={'flex'}
        flexDirection={'column'}
        width="13%"
        minHeight="100vh"
        p={8}
        bgColor={'#131328'}
        fontSize={'xl'}>

        <GridItem area={'header'}>
          <Text
            align={'center'}
            as={'b'}
            fontSize='2xl'
            color={'#FFBB0D'}
            marginBottom={'70px'}>
            Posto Fulano de Tal
          </Text>
        </GridItem>

        <GridItem area={'main'}>
          <OpcoesSidebar icon={<AiOutlineFundProjectionScreen color={'#FFBB0D'} />} name={"Dashboard"} />
          <OpcoesSidebar icon={<AiOutlineDollarCircle color={'#FFBB0D'} />} name={"Ganhos"} />
          <OpcoesSidebar icon={<AiFillCalculator color={'#FFBB0D'} />} name={"Custos"} />
          <OpcoesSidebar icon={<AiOutlineSliders color={'#FFBB0D'} />} name={"Variáveis"} />
          <OpcoesSidebar icon={<AiOutlineUser color={'#FFBB0D'} />} name={"Perfil"} />
        </GridItem>

        <GridItem area={'footer'} marginTop={'90%'}>
          <Logo />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default Sidebar;
