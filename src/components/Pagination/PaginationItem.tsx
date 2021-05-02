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
				width="4"
				size="sm"
				font-size="xs"
				colorScheme="#45466e"
				disabled 
				_disabled={{
					bg: 'blue.500',
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
			_hover={{
				bg: 'blue.90',
			}}
		>
			{number}
		</Button>
	);

}