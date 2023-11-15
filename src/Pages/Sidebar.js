import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  theme,
  Image,
} from '@chakra-ui/react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

import {
  AiOutlineFundProjectionScreen,
  AiOutlineDollarCircle,
  AiFillCalculator,
  AiOutlineForm,
  AiOutlineUser,
  AiOutlineFileSearch
} from 'react-icons/ai';
import Logo2 from '../image/Logo2.svg';
import { OpcoesSidebar } from '../components/Botoes/OpcoesSidebar';
import { AlertaAtualizarDados } from '../components/Alerta/AlertaAtualizarDados';

function Sidebar() {
  return (
    <ChakraProvider theme={theme}>
      <AlertaAtualizarDados title={'ATUALIZAÇÃO DE DADOS'} description={'Lembre-se de atualizar os dados diáriamente, semanalmente e mensalmente.'} />
      <Box
        position="fixed"
        top={0}
        left={0}
        width="13rem"
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
              icon={<AiFillCalculator />}
              name={'Custos'}
            />
          </Link>

          <Link to="/variaveis">
            <OpcoesSidebar
              icon={<AiOutlineForm  />}
              name={'Cadastro'}
            />
          </Link>

          <Link to="/dados">
            <OpcoesSidebar
              icon={<AiOutlineFileSearch  />}
              name={'Histórico'}
            />

            <Link to="/perfil">
              <OpcoesSidebar
                icon={<AiOutlineUser />}
                name={'Perfil'}
              />
            </Link>

          </Link>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default Sidebar;
