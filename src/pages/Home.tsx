import { Card } from '../componnets/Card';

import { 
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue
    } from '@chakra-ui/react';
import {useState, useContext} from 'react';
import { login } from '../services/login';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../componnets/AppContext';
  

const Home = () => {
    const [form,setForm] = useState({email:'',password:''});
    const { setIsLoggedIn } = useContext(AppContext);
    const navigate = useNavigate();

    const handleForm = (key:string,value:string): void => {
        setForm({...form,[key]:value})
    }

    const validateUser = async () => {
        const LoggedIn = await login(form.email, form.password);

        if(!LoggedIn) {
            return alert("Email Inválido ou Senha Inválido");
        }
        setIsLoggedIn(true);
        navigate('/conta/1');
    }

    return (
        <Card>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                <Text fontSize={'lg'} color={'gray.600'}>
                    to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
                </Text>
                </Stack>
                <Box
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'lg'}
                p={8}>
                <Stack spacing={4}>
                    <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" onChange={({target}) => handleForm('email',target.value)}/>
                    </FormControl>
                    <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input type="email" onChange={({target}) => handleForm('password',target.value)}/>
                    </FormControl>
                    <Stack spacing={10}>
                    <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        align={'start'}
                        justify={'space-between'}>
                        <Checkbox>Remember me</Checkbox>
                        <Link color={'blue.400'}>Forgot password?</Link>
                    </Stack>
                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                        bg: 'blue.500',
                        }}
                        onClick={() => validateUser()}>
                        Sign in
                    </Button>
                    </Stack>
                </Stack>
            </Box>
        </Stack>
        </Card>
    );
}

export default Home;