import { Stack, Box, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface NavSectionProps {
	title: string;
	children: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
	return (
		<Box width="100%">
			<Text 
				color="blue.50" 
				fontSize="small" 
				fontWeight="bold"
			>
				{title}
			</Text>

			<Stack spacing="4" marginTop="6" align="stretch">
				{children}
			</Stack>
		</Box>
	);
}