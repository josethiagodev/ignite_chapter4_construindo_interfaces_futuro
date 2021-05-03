import { 
	Flex, 
	useBreakpointValue, 
	Drawer, 
	DrawerOverlay, 
	DrawerContent, 
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody 
} from '@chakra-ui/react';
import React from 'react';

import { SidebarNav } from '../../components/Sidebar/SidebarNav';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';

export function Sidebar() {

	const { isOpen, onClose } = useSidebarDrawer();

	const isDrawerSidebarLeft = useBreakpointValue({
		base: true,
		lg: false,
	})

	if (isDrawerSidebarLeft) {
		return (
			<Drawer 
				isOpen={isOpen}  
				onClose={onClose} 
				placement="left" // Posicionamento
			>
				<DrawerOverlay>
					<DrawerContent
						bg="blue.975" 
						paddingX="4" 
						paddingTop="100" 
					>
						
						<DrawerCloseButton mt="6" marginTop="110" />

						<DrawerHeader>Navegação</DrawerHeader>

						<DrawerBody>
							<SidebarNav />
						</DrawerBody>

					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		);
	}

	return (
		<Flex 
			as="aside" 
			alignItems="stretch"
			width="60" 
			height="100vh"
			bgColor="blue.999"
			paddingX="8" 
			paddingTop="115"
			paddingLeft="8"
			paddingRight="8"
		>
			
			<SidebarNav />

		</Flex>
	);

}