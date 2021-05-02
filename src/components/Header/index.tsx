import { Flex } from '@chakra-ui/react';

import { Logotipo } from './Logotipo';
import { Search } from './Search';
import { Notifications } from './Notifications';
import { Profile } from './Profile';

export function Header() {
	return (
		<Flex
			as="header" 
			zIndex="9999"
			position="fixed"
			w="100%"
			maxWidth={1480}
			marginX="auto"
			paddingX="8"
			paddingY="5"
			align="center"
			bgColor="blue.995"
		>
			
			<Logotipo />

			<Search />

			<Flex align="center" marginLeft="auto" >
				<Notifications />

				<Profile />
			</Flex>

		</Flex>
	);
}