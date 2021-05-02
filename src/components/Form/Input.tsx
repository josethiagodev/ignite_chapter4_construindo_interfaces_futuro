import React from 'react';
import {
	FormControl, 
	FormLabel, 
	Input as ChakraInput,
	InputProps as ChakraInputProps
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
	name: string;
	label: string;
}

export function Input({ name, label, ...rest }: InputProps) {
	return (
		<FormControl>
			{ 
				!!label && 
				<FormLabel htmlFor={name} fontSize="16">
					{label}
				</FormLabel>
			}

			<ChakraInput 
				name={name}
				id={name}
				focusBorderColor="#8000bf"
				bgColor="blue.950"
				variant="filled" 
				_hover={{
					bgColor: 'blue.975'
				}}
				size="lg" 
				{...rest}
			/>
		</FormControl>
	)
}