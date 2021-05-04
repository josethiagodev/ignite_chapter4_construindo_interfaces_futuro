import React from "react";
import { 
	Box, Flex, Heading, 
	Button, Icon, Text,
	Table, Thead, Tr, 
	Th, Tbody, Td, 
	Checkbox, useBreakpointValue
} from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";

export default function Users() {

	const isScreenLarge = useBreakpointValue({
		base: false,
		lg: true,
	});

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
						<Heading 
							size="lg" 
							fontWeight="normal" 
							fontSize="24"
						>
							Visualizar usúarios
						</Heading>
						<Link href="/users/createUser" passHref>
							<Button
								as="a"
								size="sm"
								leftIcon={<Icon as={RiAddLine} />} 
								fontSize="14" 
								color="#FFFFFF"
								bgColor="#a928e7" 
								_hover={{
									background: "#9100cf",
									color: "#FFFFFF",
								}}
							>
								Criar usuário
							</Button>
						</Link>
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
									<Th 
										width="8"
										px={["4", "4", "6"]} 
										color="blue.40" 
										borderColor="#373960" 
									>
										<Checkbox colorScheme="#a928e7" />
									</Th>
									<Th 
										color="blue.50" 
										borderColor="#373960"
										fontSize="13" 
										fontWeight="400"
									>
										Nome do usuário
									</Th>
									{ isScreenLarge && 
										<Th 
											color="blue.50" 
											borderColor="#373960" 
											fontSize="13" 
											fontWeight="400"
										>
											Data de cadastro
										</Th> 
									}
									<Th 
										w="8" 
										color="blue.50" 
										borderColor="#373960"
										fontSize="13" 
										fontWeight="400"
									>
										Ações
									</Th>
								</Tr>
							</Thead>
							<Tbody>
								<Tr>
									<Td
										width="8"
										px={["4", "4", "6"]} 
										color="blue.40" 
										borderColor="#373960"
									>
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
									{ isScreenLarge && 
										<Td fontSize="14" fontWeight="400" color="blue.30" borderColor="#373960">
											26 de Abril, 2021
										</Td>
									}
									<Td borderColor="#373960">
										<Button
											as="a" 
											size="sm" 
											fontSize="13" 
											fontWeight="500" 
											cursor="pointer" 
											bg="blue.400" 
											_hover={{
												background: "blue.100",
												color: "#FFFFFF",
											}}
										>
											{ isScreenLarge ? 'Editar' : <Icon as={RiPencilLine} fontSize="15" /> }
										</Button>
									</Td>
								</Tr>
								<Tr>
									<Td
										width="8"
										px={["4", "4", "6"]} 
										color="blue.40" 
										borderColor="#373960"
									>
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
									{ isScreenLarge && 
										<Td fontSize="14" fontWeight="400" color="blue.30" borderColor="#373960">
											26 de Abril, 2021
										</Td>
									}
									<Td borderColor="#373960">
										<Button
											as="a" 
											size="sm" 
											fontSize="13" 
											fontWeight="500" 
											cursor="pointer" 
											bg="blue.400" 
											_hover={{
												background: "blue.100",
												color: "#FFFFFF",
											}}
										>
											{ isScreenLarge ? 'Editar' : <Icon as={RiPencilLine} fontSize="15" /> }
										</Button>
									</Td>
								</Tr>
								<Tr>
									<Td 
										width="8"
										px={["4", "4", "6"]} 
										color="blue.40" 
										borderColor="#373960"
									>
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
									{ isScreenLarge && 
										<Td fontSize="14" fontWeight="400" color="blue.30" borderColor="#373960">
											26 de Abril, 2021
										</Td>
									}
									<Td borderColor="#373960">
										<Button
											as="a" 
											size="sm" 
											fontSize="13" 
											fontWeight="500" 
											cursor="pointer" 
											bg="blue.400" 
											_hover={{
												background: "blue.100",
												color: "#FFFFFF",
											}}
										>
											{ isScreenLarge ? 'Editar' : <Icon as={RiPencilLine} fontSize="15" /> }
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