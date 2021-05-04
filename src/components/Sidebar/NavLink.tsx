import { 
	Link as ChakraLink, 
	Icon, Text, 
	LinkProps as ChakraLinkProps 
} from '@chakra-ui/react';
import { ElementType } from 'react';

import { ActiveLink } from '../ActiveLink';
interface NavLinkProps extends ChakraLinkProps {
	icon: ElementType;
	children: string;
	href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
	return (
		<ActiveLink href={href}>
			<ChakraLink 
				display="flex" 
				align="center" 
				w="100%"
				color="blue.40" 
				{...rest} 
				_hover={{
					color: "rgb(202,80,255)",
				}}
			>
				<Icon as={icon} fontSize="20" />
				<Text 
					marginLeft="4" 
					fontWeight="medium" 
					textDecoration="initial" 
				>
					{children}
				</Text>
			</ChakraLink>
		</ActiveLink>
	);
}