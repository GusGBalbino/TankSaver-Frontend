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
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { AlertaBotao } from './components/Alerta/AlertaBotao';
import { AlertaDiario } from './components/Alerta/AlertaDiario';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
