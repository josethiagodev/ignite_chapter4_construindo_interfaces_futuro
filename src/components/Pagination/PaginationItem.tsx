import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
	number: number;
	isCurrent?: boolean;
}

export function PaginationItem({ 
	isCurrent = false, 
	number
}: PaginationItemProps) {

	if (isCurrent) {
		return (
			<Button 
				width="9" 
				height="8"
				size="sm"
				font-size="xs"
				colorScheme="#45466e"
				disabled 
				_disabled={{
					bg: 'blue.400',
					cursor: 'default',
				}}
			>
				{number}
			</Button>
		);
	}

	return (
		<Button 
			width="4"
			size="sm"
			font-size="xs"
			colorScheme="#45466e"
			bg="blue.985"
			_hover={{
				background: 'blue.90',
			}}
		>
			{number}
		</Button>
	);

}