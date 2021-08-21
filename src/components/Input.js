import { Box, NumberInput, NumberInputField, Text } from '@chakra-ui/react';
import React from 'react';

const Input = (label) => {
  return (
    <Box>
      <Text mb="4px">{label}</Text>
      <NumberInput precision={2}>
        <NumberInputField placeholder="0.00" position="absolute" />
      </NumberInput>
    </Box>
  );
};

export default Input;
