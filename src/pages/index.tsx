import { Flex, Button, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';

export default function Home() {
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
      >
        <Stack spacing="5">
          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="password" label="Senha" />
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
        >
          Entra agora
        </Button>
      </Flex>
    </Flex>
  )
}
