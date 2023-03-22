import { 
    Input,
    Box,
    Center,
  } from '@chakra-ui/react';
import { Button } from '../componnets/Button';
import { login } from '../services/login';

export const Card = () => {
    return (
        <Box minHeight='100vh' backgroundColor='gray' padding='25px'>
          <Box backgroundColor='#ffffff' borderRadius='25px' padding='15px'>
            <Center>
              <h1>Faça Login</h1>
            </Center>
            <Input placeholder="email"/>
            <Input placeholder="password"/>
            <Center>
              <Button event={login}/>
            </Center>
          </Box>
        </Box>
    );
}