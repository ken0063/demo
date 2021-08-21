import { Box, NumberInput, NumberInputField } from '@chakra-ui/react';
import React from 'react';

const InputField = (props) => {
  return (
    <Box>
      <NumberInput
        keepWithinRange={false}
        clampValueOnBlur={false}
        precision={props.precision}
        variant="filled"
        min={props.min}
      >
        <NumberInputField
          bg="bg.5"
          placeholder={props.placeholder}
          textAlign="right"
          color="text.4"
          fontWeight="extrabold"
          fontSize="md"
          _focus={{
            bg: 'hsl(189, 41%, 97%)',
            borderColor: 'hsl(172, 67%, 45%)',
          }}
        />
      </NumberInput>
    </Box>
  );
};

export default InputField;
