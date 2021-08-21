import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import colors from '../theme/foundation/colors';
import InputField from './InputField';

const Tips = () => {
  return (
    <Box>
      <Text
        mb={{ base: '5px', lg: '15px' }}
        fontSize="sm"
        fontWeight="bold"
        color="text.2"
      >
        Select Tip %
      </Text>
      <SimpleGrid
        columns={{ base: '2', lg: '3' }}
        spacing={5}
        fontWeight="extrabold"
        fontSize="md"
      >
        <Button
          bg="bg.2"
          color="text.5"
          colorScheme="button"
          _focus={{
            bg: 'hsl(172, 67%, 45%)',
            outline: 'none',
            color: 'hsl(183, 100%, 15%)',
          }}
          _hover={{
            bg: 'hsl(172, 67%, 45%)',
            color: 'hsl(183, 100%, 15%)',
          }}
        >
          5%
        </Button>
        <Button
          bg="bg.2"
          colors="text.5"
          colorScheme="button"
          _focus={{
            bg: 'hsl(172, 67%, 45%)',
            outline: 'none',
            color: 'hsl(183, 100%, 15%)',
          }}
          _hover={{
            bg: 'hsl(172, 67%, 45%)',
            color: 'hsl(183, 100%, 15%)',
          }}
        >
          10%
        </Button>
        <Button
          bg="bg.2"
          colorScheme="button"
          _focus={{
            bg: 'hsl(172, 67%, 45%)',
            outline: 'none',
            color: 'hsl(183, 100%, 15%)',
          }}
          color="text.5"
          _hover={{
            bg: 'hsl(172, 67%, 45%)',
            color: 'hsl(183, 100%, 15%)',
          }}
        >
          15%
        </Button>
        <Button
          bg="bg.2"
          colorScheme="button"
          _focus={{
            bg: 'hsl(172, 67%, 45%)',
            outline: 'none',
            color: 'hsl(183, 100%, 15%)',
          }}
          color="text.5"
          _hover={{
            bg: 'hsl(172, 67%, 45%)',
            color: 'hsl(183, 100%, 15%)',
          }}
        >
          25%
        </Button>
        <Button
          bg="bg.2"
          colorScheme="button"
          _focus={{
            bg: 'hsl(172, 67%, 45%)',
            outline: 'none',
            color: 'hsl(183, 100%, 15%)',
          }}
          color="text.5"
          _hover={{
            bg: 'hsl(172, 67%, 45%)',
            color: 'hsl(183, 100%, 15%)',
          }}
        >
          50%
        </Button>
        <InputField placeholder="Custom" />
      </SimpleGrid>
    </Box>
  );
};

export default Tips;
