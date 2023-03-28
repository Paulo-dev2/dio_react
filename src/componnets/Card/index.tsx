import { Flex,useColorModeValue } from '@chakra-ui/react';

export const Card = ({children}:any) => {
    return (
      <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
        {children}
      </Flex>
    );
}