import { Box, Text } from '@chakra-ui/react';

export function Logotipo() {
	return (
		<Box w="auto" h="auto">
			<Text
				w="auto" 
				h="auto"
				fontSize={[ "1xl", "2xl" ]}
				fontWeight="bold" 
				letterSpacing="tight"
			>
				DASHGO
			</Text>
		</Box>
	);
}