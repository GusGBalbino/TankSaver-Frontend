import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Button,
  theme,
  Stack,
  GridItem,
  Flex
} from '@chakra-ui/react';
import { MdBuild, MdCall } from "react-icons/md"
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Logo } from '../Logo';
import { OpcoesSidebar } from '../components/OpcoesSidebar/OpcoesSidebar';

import { defineStyle, defineStyleConfig } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'


const outline = defineStyle({
  border: '2px dashed', // change the appearance of the border
  borderRadius: 0, // remove the border radius
  fontWeight: 'semibold', // change the font weight
  colorScheme: 'yellow'
})

const buttonTheme = defineStyleConfig({
  variants: { outline },
})

export const teste = extendTheme({
  components: { Button: buttonTheme },
})
console.log(teste);

function Sidebar() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid width="15vw" minHeight="100vh" p={7} bgColor={'#131328'}>
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <VStack spacing={5} >
            <OpcoesSidebar/>
            <OpcoesSidebar/>
            <OpcoesSidebar/>
            <OpcoesSidebar/>
            <OpcoesSidebar/>
          </VStack>
          <Flex alignItems={'end'}>
            <Logo />
          </Flex>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default Sidebar;
