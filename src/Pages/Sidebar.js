import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  theme,
  Image,
} from '@chakra-ui/react';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
        gap={50}
      >
        <Image src={Logo2} boxSize={['2.5rem', '4rem']} alt="Logo TankSaver" />

        <VStack spacing={2} alignItems="center" justifyContent="center">
          <Link to="/dashboard">
            <OpcoesSidebar
              icon={<AiOutlineFundProjectionScreen />}
              name={'Dashboard'}
            />
          </Link>

          <Link to="/ganhos">
            <OpcoesSidebar
              icon={<AiOutlineDollarCircle />}
              name={'Ganhos'}
            />
          </Link>

          <Link to="/custos">
            <OpcoesSidebar
              icon={<AiFillCalculator/>}
              name={'Custos'}
            />
          </Link>

          <Link to="/variaveis">
            <OpcoesSidebar
              icon={<AiOutlineSliders />}
              name={'Variáveis'}
            />
          </Link>

          <Link to="/perfil">
            <OpcoesSidebar
              icon={<AiOutlineUser  />}
              name={'Perfil'}
            />
          </Link>
        </VStack>

        {/* Adicione a imagem diretamente dentro da Box da Sidebar */}
        {/* <Image
          src={logo}
          boxSize={['10rem', '15rem']}
          alt="Logo TankSaver"
          style={{
            position: 'sticky',
            bottom: 0,
          }}
        /> */}
      </Box>
    </ChakraProvider>
  );
}

export default Sidebar;
