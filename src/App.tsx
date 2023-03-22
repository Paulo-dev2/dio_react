import { Header } from './componnets/Header';
import {ChakraProvider} from '@chakra-ui/react';
import { Card } from './Card';

function App() {
  return (
      <ChakraProvider>
        <Header/>
        <Card/>
      </ChakraProvider>
  );
}

export default App;
