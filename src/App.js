import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Alert,
  AlertIcon,
  AppRoutes,
  Router,
  Routes,
  Route
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { AlertaBotao } from './components/Alerta/AlertaBotao';
import { AlertaDiario } from './components/Alerta/AlertaDiario';
import './Routes/Rotas';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          
        </Grid>
      </Box>

      <Router>
        <AppRoutes/>
      </Router>
    </ChakraProvider>

  );
}

export default App;
