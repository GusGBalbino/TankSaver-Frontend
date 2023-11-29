import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Link,
  ChakraProvider,
  theme,
  useToast,
  FormErrorMessage
} from '@chakra-ui/react';
import logo from '../image/logo.svg';

function Login() {
  const navigate = useNavigate();
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/login/', { email, senha });
      const { access_token, postoId, postoName } = response.data;

      if (access_token) {
        localStorage.setItem('token', access_token);
        localStorage.setItem('postoId', postoId);
        localStorage.setItem('postoName', postoName);
        navigate('/dashboard');
      }
    } catch (err) {
      setError("Erro de login, verifique suas credenciais.");
      console.error("Erro de login:", err);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        bgColor="#131328"
        p="4"
      >
        <Box
          as="form"
          onSubmit={handleLogin}
          display="flex"
          flexDirection="column"
          alignItems="center"
          width={{ base: "100%", sm: "50%" }}
          maxW={{ base: "100%", sm: "400px" }}
          height="auto"
          bg="black"
          borderRadius="20px"
          border="1px solid"
          boxShadow="lg"
          p="6"
          bgColor="#FFBB0D"
          position="relative"
          zIndex="1"
          marginBottom="50px"
        >
          <Text fontSize="40px" fontWeight="bold" color="black" textAlign="center">
            Login
          </Text>

          <FormControl id="username" mt="4" isInvalid={error}>
            <FormLabel color="black">Usuário</FormLabel>
            <Input
              type="text"
              placeholder="Digite seu usuário..."
              bg="white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl id="password" mt="4" isInvalid={error}>
            <FormLabel color="black">Senha</FormLabel>
            <Input
              type="password"
              placeholder="Digite sua senha..."
              bg="white"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            {error && <FormErrorMessage>{error}</FormErrorMessage>}
          </FormControl>

          <Box mt="4" display="flex" flexDirection="column" alignItems="center">
            <Link alignSelf="flex-end" marginRight="1px" marginLeft="220px" color="blue.600" >
              Esqueci a senha.
            </Link>
            <Button type="submit" bg="blue.900" color="white" mt="8" _hover={{ bg: 'gray.700' }}>
              Entrar
            </Button>
          </Box>
        </Box>

        <Box
          position="fixed"
          bottom="0"
          left="50%"
          transform="translateX(-50%)"
          p="2"
          zIndex="0"
        >
          <img
            src={logo}
            alt="Logo TankSaver"
            style={{ width: '200px', height: 'auto' }}
          />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default Login;
