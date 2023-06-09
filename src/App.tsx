import { BrowserRouter } from 'react-router-dom';
import {ChakraProvider} from '@chakra-ui/react';

import { AppContextProvider } from './componnets/AppContext';

import { Layout } from './componnets/Layout';
import MainRoutes from './routes';
function App() {
  return (
      <BrowserRouter>
        <AppContextProvider>
            <ChakraProvider>
              <Layout>
                <MainRoutes />
              </Layout>
            </ChakraProvider>
        </AppContextProvider>
      </BrowserRouter>
  );
}

export default App;
