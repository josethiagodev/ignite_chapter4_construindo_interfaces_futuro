import { 
	Box, Flex, Heading, 
	Divider, VStack, SimpleGrid, 
	HStack, Button
} from "@chakra-ui/react";
import Link from 'next/link';

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
					mt="115"
					pl="6"
					pr="6"
					pb="6"
				>
					<Flex
						direction="column" 
						width="100%" 
						minHeight="auto" 
						marginX="auto" 
						padding={[ "5", "6", "7" ]}
						bg="blue.975"
						borderRadius="10"
					>
						<Heading size="lg" fontWeight="normal" fontSize="23">
							Cadastrar usuário
						</Heading>

						<Divider w="100%" mt="6" mb="8" borderColor="#373960" />

						<VStack spacing="6">
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
							<HStack spacing="6">
								<Link href="/users" passHref>
									<Button 
										w={["100%", "100%", "auto"]}
										size="sm" 
										paddingX="6" 
										paddingY="5" 
										font-size="xs"
										bg="blue.500"
										_hover={{
											bg: 'blue.300',
											color: "#FFFFFF",
										}}
									>
										Cancelar
									</Button>
								</Link>
								<Button 
									w={["100%", "100%", "auto"]}
									size="sm" 
									paddingX="6" 
									paddingY="5" 
									font-size="xs" 
									bg="#a928e7" 
									_hover={{
										background: "#9100cf",
										color: "#FFFFFF",
									}}
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