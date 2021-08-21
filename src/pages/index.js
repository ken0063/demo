import { Box, Center, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { Header, InputField, Result, Tips } from '../components';

export default function Home() {
  return (
    <>
      <Box
        bg="bg.3"
        width="100%"
        h="100vh"
        display={{ lg: 'flex' }}
        alignItems={{ lg: 'center' }}
        justifyContent={{ lg: 'center' }}
      >
        <Center
          display={{ lg: 'flex' }}
          flexDirection={{ lg: 'column' }}
          width={{ lg: '80%' }}
        >
          <Header />
          <Flex
            rounded="15px"
            p={{ base: '35px', lg: '50px' }}
            flexDirection="column"
            bg="bg.6"
            width={{ lg: '70%' }}
          >
            <SimpleGrid
              columns={{ base: '1', lg: '2' }}
              spacing={{ base: '5', lg: '20' }}
            >
              <Box>
                <Box mb={{ base: '20px', lg: '40px' }}>
                  <Text
                    mb={{ base: '5px', lg: '15px' }}
                    fontSize="sm"
                    fontWeight="bold"
                    color="text.2"
                  >
                    Bill
                  </Text>
                  <InputField min={1} precision={2} placeholder="0.00" />
                </Box>
                <Tips />
                <Box mt={{ base: '20px', lg: '40px' }}>
                  <Text
                    mb={{ base: '5px', lg: '15px' }}
                    fontSize="sm"
                    fontWeight="bold"
                    color="text.2"
                  >
                    Number of People
                  </Text>
                  <InputField precision={0} min={1} placeholder="0" />
                </Box>
              </Box>
              <Result />
            </SimpleGrid>
          </Flex>
        </Center>
      </Box>
    </>
  );
}
