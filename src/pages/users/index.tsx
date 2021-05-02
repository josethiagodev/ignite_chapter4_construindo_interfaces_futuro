import React from "react";
import { 
	Box, Flex, Heading, 
	Button, Icon, Text,
	Table, Thead, Tr, 
	Th, Tbody, Td, Checkbox
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";

export default function Users() {
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
						w="100%" 
						h="5" 
						mb="8" 
						justify="space-between" 
						align="center"
					>
						<Heading size="lg" fontWeight="normal" fontSize="24">
							Visualizar usúarios
						</Heading>
						<Button
							as="a"
							size="sm"
							bgColor="#a928e7" 
							leftIcon={<Icon as={RiAddLine} />} 
							fontSize="14"
						>
							Criar usuário
						</Button>
					</Flex>
				
					<Flex
						direction="column" 
						width="100%" 
						minHeight="auto" 
						marginX="auto" 
						padding="5"
						bg="blue.975"
						borderRadius="10"
					>
						<Table w="100%" h="auto">
							<Thead>
								<Tr>
									<Th px="5" color="blue.40" width="8" borderColor="#373960">
										<Checkbox colorScheme="#a928e7" />
									</Th>
									<Th color="blue.50" borderColor="#373960">Nome do usuário</Th>
									<Th color="blue.50" borderColor="#373960">Data do cadastro</Th>
									<Th color="blue.50" w="8" borderColor="#373960">Ações</Th>
								</Tr>
							</Thead>
							<Tbody>
								<Tr>
									<Td px="5" borderColor="#373960">
										<Checkbox colorScheme="#a928e7" />
									</Td>
									<Td borderColor="#373960">
										<Box>
											<Text fontWeight="bold" color="blue.30">
												José Thiago
											</Text>
											<Text fontSize="small" color="blue.40">
												josethiagowd@gmail.com
											</Text>
										</Box>
									</Td>
									<Td fontSize="14" fontWeight="400" color="blue.30" borderColor="#373960">
										26 de Abril, 2021
									</Td>
									<Td borderColor="#373960">
										<Button
											as="a"
											size="sm"
											bg="blue.400" 
											leftIcon={<Icon as={RiPencilLine} />}
											fontSize="13"
											cursor="pointer"
										>
											Editar
										</Button>
									</Td>
								</Tr>
								<Tr>
									<Td px="5" borderColor="#373960">
										<Checkbox colorScheme="#a928e7" />
									</Td>
									<Td borderColor="#373960">
										<Box>
											<Text fontWeight="bold" color="blue.30">
												José Thiago
											</Text>
											<Text fontSize="small" color="blue.40">
												josethiagowd@gmail.com
											</Text>
										</Box>
									</Td>
									<Td fontSize="14" fontWeight="400" color="blue.30" borderColor="#373960">
										26 de Abril, 2021
									</Td>
									<Td borderColor="#373960">
										<Button
											as="a"
											size="sm"
											bg="blue.400" 
											leftIcon={<Icon as={RiPencilLine} />}
											fontSize="13"
											cursor="pointer"
										>
											Editar
										</Button>
									</Td>
								</Tr>
								<Tr>
									<Td px="5" borderColor="#373960">
										<Checkbox colorScheme="#a928e7" />
									</Td>
									<Td borderColor="#373960">
										<Box>
											<Text fontWeight="bold" color="blue.30">
												José Thiago
											</Text>
											<Text fontSize="small" color="blue.40">
												josethiagowd@gmail.com
											</Text>
										</Box>
									</Td>
									<Td fontSize="14" fontWeight="400" color="blue.30" borderColor="#373960">
										26 de Abril, 2021
									</Td>
									<Td borderColor="#373960">
										<Button
											as="a"
											size="sm"
											bg="blue.400" 
											leftIcon={<Icon as={RiPencilLine} />}
											fontSize="13"
											cursor="pointer"
										>
											Editar
										</Button>
									</Td>
								</Tr>
							</Tbody>
						</Table>

						<Box w="100%" justify="center" align="center" direction="row">
							<Pagination />
						</Box>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
}