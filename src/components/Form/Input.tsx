import { forwardRef, ForwardRefRenderFunction } from "react";
import {
	FormControl, 
	FormLabel, 
	Input as ChakraInput,
	InputProps as ChakraInputProps, 
	FormErrorMessage
} from '@chakra-ui/react';
import { FieldError } from "react-hook-form";
interface InputProps extends ChakraInputProps {
	name: string;
	label?: string;
	error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = 
( {name, label, error = null, ...rest}, ref ) => {
	return (
		<FormControl isInvalid={!!error}>

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
				bg="blue.950"
				variant="filled" 
				_hover={{
					bg: 'blue.975'
				}}
				size="lg" 
				ref={ref}
				{...rest}
			/>

			{
				!!error && (
					<FormErrorMessage>
						{error.message}
					</FormErrorMessage>
				)
			}
			
		</FormControl>
	);
}

export const Input = forwardRef(InputBase);