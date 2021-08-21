import { extendTheme } from '@chakra-ui/react';

import foundations from './foundation/index';

const theme = extendTheme({
  ...foundations,
});

export default theme;
