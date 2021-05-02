import { Flex, Input, Icon } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

export function Search() {
	return (
		<Flex
			as="label"
			flex="1" 
			position="relative" 
			maxWidth={400} 
			alignSelf="center" 
			paddingY="3"
			paddingX="5"  
			marginX="auto"  
			color="blue.80"
			bgColor="blue.975" 
			borderRadius="full"
		>
			<Input
				variant="unstyled" 
				paddingX="4" 
				marginRight="6" 
				color="blue.80" 
				placeholder="Buscar na plataforma" 
				_placeholder={{ color: 'blue.90' }}
			/>
			<Icon as={RiSearchLine} fontSize="20" />
		</Flex>
	);
}