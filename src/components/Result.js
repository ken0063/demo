import React from 'react';
import { Box, Button, Flex, SimpleGrid, Text } from '@chakra-ui/react';
const Result = () => {
  return (
    <Box
      p="20px"
      bg="bg.2"
      rounded="15px"
      display={{ lg: 'flex' }}
      flexDirection={{ lg: 'column' }}
      justifyContent={{ lg: 'space-between' }}
    >
      <Box>
        <SimpleGrid columns={2} mb={{ base: '20px', lg: '50px' }}>
          <Flex flexDirection="column">
            <Text color="text.5" fontSize="sm" fontWeight="bold" mb="3px">
              {' '}
              Tip Amount
            </Text>
            <Text color="text.2" fontSize="xs" fontWeight="bold">
              /person
            </Text>
          </Flex>
          <Text
            textAlign="right"
            fontWeight="extrabold"
            fontSize="md"
            color="text.3"
          >
            $4.27
          </Text>
        </SimpleGrid>
        <SimpleGrid columns={2} mb={{ base: '20px', lg: '50px' }}>
          <Flex flexDirection="column">
            <Text color="text.5" fontSize="sm" fontWeight="bold" mb="3px">
              {' '}
              Total
            </Text>
            <Text color="text.2" fontSize="xs" fontWeight="bold">
              /person
            </Text>
          </Flex>
          <Text
            textAlign="right"
            fontWeight="extrabold"
            fontSize="md"
            color="text.3"
          >
            {`$${4.27}`}
          </Text>
        </SimpleGrid>
      </Box>
      <Button
        width="100%"
        bg="bg.1"
        color="text.4"
        colorScheme="button"
        fontWeight="extrabold"
        _focus={{
          outline: 'none',
          color: 'hsl(0, 0%, 100%)',
        }}
        _hover={{
          color: 'hsl(0, 0%, 100%)',
        }}
      >
        RESET
      </Button>
    </Box>
  );
};

export default Result;
