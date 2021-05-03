import { Flex, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react';

import { Logotipo } from './Logotipo';
import { Search } from './Search';
import { Notifications } from './Notifications';
import { Profile } from './Profile';

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';

import { RiMenu2Line } from 'react-icons/ri';

export function Header() {

	const { onOpen } = useSidebarDrawer();

	const isScreenLarge = useBreakpointValue({
		base: false,
		lg: true,
	});

	return (
		<Flex
			as="header" 
			zIndex="9999"
			position="fixed"
			w="100%"
			maxWidth={1480}
			marginX="auto"
			paddingX="6"
			paddingY="5"
			align="center"
			bgColor="blue.995"
		>
			
			{ !isScreenLarge && (
				<IconButton 
					aria-label="Open Navigation"
					icon={ <Icon as={RiMenu2Line} /> } 
					fontSize="21" 
					variant="unstyled" 
					onClick={onOpen} 
					w="auto" 
					h="9" 
					mr="4" 
					bg="blue.500" 
					color="blue.10" 
					borderRadius="4"
				>

				</IconButton>
			)}

			<Logotipo />

			<Search />

			<Flex align="center" marginLeft="auto" >
				{ isScreenLarge && <Notifications /> }

				<Profile showProfileData={isScreenLarge} />
			</Flex>

		</Flex>
	);

}