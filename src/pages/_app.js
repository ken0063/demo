import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import Head from 'next/head';
import '@fontsource/space-mono/400.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>SPLLITER</title>
        <link rel="icon" href="/public/images/favicon-32x32.png" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
