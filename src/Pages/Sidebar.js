import React from 'react';
import {
  ChakraProvider,
  Text,
  VStack,
  Grid,
  theme,
  Image,
  Flex,
  GridItem
} from '@chakra-ui/react';

import { AiOutlineFundProjectionScreen, AiOutlineDollarCircle, AiFillCalculator, AiOutlineSliders, AiOutlineUser } from "react-icons/ai";
import { Logo } from '../Logo';
import Logo2 from '../image/Logo2.svg';
import logo from '../image/logo.svg';
import { OpcoesSidebar } from '../components/Botoes/OpcoesSidebar';

function Sidebar() {
  return (
    <ChakraProvider theme={theme}>

      <Grid
        templateAreas={`"header header"
      "main"
      "footer"`}
        gap={5}
        display={'flex'}
        flexDirection={'column'}
        width="13%"
        minHeight="100vh"
        p={8}
        bgColor={'#131328'}
        fontSize={'xl'}>

          <VStack>
          <Image
            src={Logo2}
            boxSize={'50px'}
            marginBottom={'25px'}
            alt="Logo TankSaver"/>
        
          <OpcoesSidebar icon={<AiOutlineFundProjectionScreen color={'#FFBB0D'} />} name={"Dashboard"} />
          <OpcoesSidebar icon={<AiOutlineDollarCircle color={'#FFBB0D'} />} name={"Ganhos"} />
          <OpcoesSidebar icon={<AiFillCalculator color={'#FFBB0D'} />} name={"Custos"} />
          <OpcoesSidebar icon={<AiOutlineSliders color={'#FFBB0D'} />} name={"Variáveis"} />
          <OpcoesSidebar icon={<AiOutlineUser color={'#FFBB0D'} />} name={"Perfil"} />

          <Image
            src={logo}
            boxSize={'150px'}
            marginBottom={'25px'}
            alt="Logo TankSaver"/>
          </VStack>
      </Grid>
    </ChakraProvider>
  );
}

export default Sidebar;