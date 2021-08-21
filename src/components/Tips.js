import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

const Tips = () => {
  return (
    <Box>
      <Text mb="4px">Select Tip %</Text>
      <SimpleGrid columns={2} spacing={5}>
        <Button>5%</Button>
        <Button>10%</Button>
        <Button>15%</Button>
        <Button>25%</Button>
        <Button>50%</Button>
        <Button>Custom</Button>
      </SimpleGrid>
    </Box>
  );
};

export default Tips;
