import { Icon, HStack } from '@chakra-ui/react';
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri';

export function Notifications() {
	return (
		<HStack
			spacing={["6", "8"]} 
			marginX={["6", "8"]}
			paddingRight={["6", "8"]}
			paddingY="1" 
			color="blue.80"
			borderColor="blue.90"
			borderRightWidth={2}
		>
			<Icon as={RiNotificationLine} fontSize="20" />
			<Icon as={RiUserAddLine} fontSize="20" />
		</HStack>
	);
}