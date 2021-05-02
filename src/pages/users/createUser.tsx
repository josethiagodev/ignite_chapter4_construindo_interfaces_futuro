import { 
	Box, Flex, Heading, 
	Divider, VStack, SimpleGrid, 
	HStack, Button
} from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Input } from "../../components/Form/Input";

export default function CreateUser() {
	return (
		<Box direction="column" height="100vh">
			<Header />

			<Flex 
				width="100%" 
				maxWidth={1480} 
				minHeight="100vh" 
				marginX="auto" 
			>
				<Sidebar />

				<Box 
					flex="1" 
					borderRadius={8} 
					paddingTop="115"
					pl="5"
					pr="5"
					pb="5"
				>
					<Flex
						direction="column" 
						width="100%" 
						minHeight="auto" 
						marginX="auto" 
						padding="5"
						bg="blue.975"
						borderRadius="10"
					>
						<Heading size="lg" fontWeight="normal" fontSize="24">
							Cadastrar usuário
						</Heading>

						<Divider marginY="6" borderColor="#373960" />

						<VStack spacing="8">
							<SimpleGrid minChildWidth="250px" width="100%" spacing="8">
								<Input name="name" label="Nome completo" />
								<Input name="email" type="email" label="Seu melhor email" />
							</SimpleGrid>
							<SimpleGrid minChildWidth="250px" width="100%" spacing="8">
								<Input name="password" type="password" label="Senha" />
								<Input name="password_confirm" type="password" label="Confirmar senha" />
							</SimpleGrid>
						</VStack>

						<Flex mt="8" justify="flex-end">
							<HStack spacing="4">
								<Button
									size="sm"
									font-size="xs"
									bgColor="rgba(42, 45, 83, 1)"
									_hover={{
										bg: '#31335a',
									}}
									px="5"
								>
									Cancelar
								</Button>
								<Button 
									size="sm"
									font-size="xs"
									bgColor="#a928e7" 
									_hover={{
										bg: '#45466e',
									}}
									px="5"
								>
									Cadastrar
								</Button>
							</HStack>
						</Flex>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
}