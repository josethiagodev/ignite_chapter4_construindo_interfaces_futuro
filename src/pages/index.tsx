import { Flex, Button, Stack } from '@chakra-ui/react';

import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../components/Form/Input';

type SignInFormData = {
  email: string;
  password: string;
};

// Esquema dae validação do YUP
const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório!').email('E-mail inválido!'),
  password: yup.string().required('Senha obrigatório!'),
})

export default function Home() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const { errors } = formState

  // Autenticação do usuário (LOGIN)
  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise( resolve => setTimeout(resolve, 2000) );
  }

  return (
    <Flex 
      w="100vw" h="100vh" 
      align="center" justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={450}
        bg="blue.925"
        p="10"
        borderRadius={10}
        flexDirection="column" 
        onSubmit={ handleSubmit(handleSignIn) }
      >
        <Stack spacing="5">
          <Input 
            name="email" 
            // type="email" 
            label="E-mail" 
            error={errors.email} 
            {...register('email')}
          />
          <Input 
            name="password" 
            // type="password" 
            label="Senha" 
            error={errors.password} 
            {...register('password')}
          />
        </Stack>

        <Button 
          type="submit" 
          size="lg" 
          mt="7" 
          bgGradient="linear(to-l, #a928e7, #9400d3, #8000bf)"
          _hover={{
            bgColor: '#8000bf'
          }}
          _focus={{
            bgColor: '#8000bf'
          }}
          _active={{
            bgColor: '#8000bf'
          }} 
          isLoading={ formState.isSubmitting }
        >
          Entra agora
        </Button>
      </Flex>
    </Flex>
  )
}
