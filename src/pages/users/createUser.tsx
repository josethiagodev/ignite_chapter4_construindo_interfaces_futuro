import { 
	Box, Flex, Heading, 
	Divider, VStack, SimpleGrid, 
	HStack, Button
} from "@chakra-ui/react";
import Link from 'next/link';

import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Input } from "../../components/Form/Input";

type CreateUserFormData = {
	name: string;
	email: string;
	password: string;
	password_confirmation: string;
};
 
// Esquema dae validação do YUP
const createUserFormSchema = yup.object().shape({
	name: yup.string().required('Nome obrigatório!'),
	email: yup.string().required('E-mail obrigatório!').email('E-mail inválido!'),
	password: yup.string().required('Senha obrigatório!').min(6, 'No mínimo 6 caracteres'),
	password_confirmation: yup.string().oneOf([
		null, 
		yup.ref('password')
	], 'As senhas precisam ser iguais!'),
})

export default function CreateUser() {
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(createUserFormSchema)
	});

	const { errors } = formState

	const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
		await new Promise( resolve => setTimeout(resolve, 2000) );
	}

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
						as="form"
						direction="column" 
						width="100%" 
						minHeight="auto" 
						marginX="auto" 
						padding={[ "5", "6", "7" ]}
						bg="blue.975"
						borderRadius="10" 
						onSubmit={ handleSubmit(handleCreateUser) }
					>
						<Heading size="lg" fontWeight="normal" fontSize="23">
							Cadastrar usuário
						</Heading>

						<Divider w="100%" mt="6" mb="8" borderColor="#373960" />

						<VStack spacing="6">
							<SimpleGrid minChildWidth="250px" width="100%" spacing="8">
								<Input 
									name="name" 
									// type="name"  
									label="Nome completo" 
									error={errors.name} 
									{...register('name')}
								/>
								<Input 
									name="email" 
									// type="email" 
									label="Seu melhor email" 
									error={errors.email} 
									{...register('email')}
								/>
							</SimpleGrid>
							<SimpleGrid minChildWidth="250px" width="100%" spacing="8">
								<Input 
									name="password" 
									// type="password" 
									label="Senha" 
									error={errors.password} 
									{...register('password')}
								/>
								<Input 
									name="password_confirm" 
									// type="password" 
									label="Confirmar senha" 
									error={errors.password_confirmation}
									{...register('password_confirmation')}
								/>
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
									type="submit" 
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
									isLoading={formState.isSubmitting}
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