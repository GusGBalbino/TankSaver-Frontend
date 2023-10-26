import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  theme,
  Image,
} from '@chakra-ui/react';

import {
  AiOutlineFundProjectionScreen,
  AiOutlineDollarCircle,
  AiFillCalculator,
  AiOutlineSliders,
  AiOutlineUser,
} from 'react-icons/ai';
import { Logo } from '../Logo';
import Logo2 from '../image/Logo2.svg';
import logo from '../image/logo.svg';
import { OpcoesSidebar } from '../components/Botoes/OpcoesSidebar';

function Sidebar() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        position="fixed"
        top={0}
        left={0}
        width="10rem"
        height="100%" 
        p={8}
        bgColor={'#131328'}
        fontSize={['xl', 'md']}
        display="flex"
        flexDirection="column"
        alignItems="center"
        overflowY="auto"
        overflowX="hidden"
        zIndex={10} 
      >
        <VStack spacing={5} alignItems="center" justifyContent="center">
          <Image src={Logo2} boxSize={['2.5rem', '4rem']} alt="Logo TankSaver" />

          <OpcoesSidebar
            icon={<AiOutlineFundProjectionScreen color={'#FFBB0D'} />}
            name={'Dashboard'}
          />
          <OpcoesSidebar
            icon={<AiOutlineDollarCircle color={'#FFBB0D'} />}
            name={'Ganhos'}
          />
          <OpcoesSidebar
            icon={<AiFillCalculator color={'#FFBB0D'} />}
            name={'Custos'}
          />
          <OpcoesSidebar
            icon={<AiOutlineSliders color={'#FFBB0D'} />}
            name={'Variáveis'}
          />
          <OpcoesSidebar
            icon={<AiOutlineUser color={'#FFBB0D'} />}
            name={'Perfil'}
          />
        </VStack>

        <Box
          position="absolute"
          bottom={0}
          width="100%"
          textAlign="center"
        >
          <Image src={logo} boxSize={['10rem', '15rem']} alt="Logo TankSaver" />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default Sidebar;
