import React from 'react';
import { Box, Button, Flex, SimpleGrid, Text } from '@chakra-ui/react';
const Result = () => {
  return (
    <Box p="20px">
      <SimpleGrid columns={2} mb="20px">
        <Flex flexDirection="column">
          <Text> Tip Amount</Text>
          <Text>/person</Text>
        </Flex>
        <Text textAlign="right">$4.27</Text>
      </SimpleGrid>
      <SimpleGrid columns={2} mb="20px">
        <Flex flexDirection="column">
          <Text> Total</Text>
          <Text>/person</Text>
        </Flex>
        <Text textAlign="right">$4.27</Text>
      </SimpleGrid>

      <Button width="100%">Reset</Button>
    </Box>
  );
};

export default Result;
