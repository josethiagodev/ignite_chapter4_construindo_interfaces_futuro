import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

interface ProfileProps {
	showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
	return (
		<Flex align="center">
			
			<Avatar 
				size="md" 
				name="José Thiago" 
				src="https://avatars.githubusercontent.com/u/56521337?v=4"
			/>
			
			{ showProfileData && (
				<Box marginLeft="3" textAlign="left">
					<Text color="blue.30" fontSize="small" fontWeight="bold">José Thiago</Text>
					<Text color="blue.70" fontSize="small">josethiagowd@gmail.com</Text>
				</Box>
			)}

		</Flex>
	);
}