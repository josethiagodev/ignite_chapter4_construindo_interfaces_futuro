import { Flex, Stack } from '@chakra-ui/react';
import { 
	RiDashboardLine, 
	RiContactsLine, 
	RiInputMethodLine, 
	RiGitMergeLine
} from 'react-icons/ri';

import { NavSection } from './NavSection';
import { NavLink } from './NavLink';

export function Sidebar() {
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
			<Stack spacing="12" align="flex-start">

				<NavSection title="MENU PRINCIPAL">
					<NavLink icon={RiDashboardLine}>Dashboard</NavLink>
					<NavLink icon={RiContactsLine}>Usuários</NavLink>
				</NavSection>

				<NavSection title="AUTOMAÇÃO">
					<NavLink icon={RiInputMethodLine}>Formulários</NavLink>
					<NavLink icon={RiGitMergeLine}>Automação</NavLink>
				</NavSection>
				
			</Stack>
		</Flex>
	);
}