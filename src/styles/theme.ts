import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	colors: {
		blue: {
			"999": "rgba(20, 20, 40, 0.65)",
			"995": "rgba(20, 20, 46, 1)",
			"985": "rgba(25, 27, 50, 1)",
			"975": "rgba(29, 31, 58, 1)",
			"950": "rgba(33, 35, 66, 1)",
			"925": "rgba(37, 40, 74, 1)",
			"900": "rgba(42, 45, 83, 1)",
			"800": "#31335a",
			"700": "#373960",
			"600": "#3e3f67",
			"500": "#32345b",
			"400": "#3a3b63",
			"300": "#42436b",
			"200": "#4a4a73",
			"100": "#45466e",
			"90": "#585882",
			"80": "#696994",
			"70": "#8685b2",
			"60": "#8e8dba",
			"50": "#9795c3",
			"40": "#e9e8f0",
			"30": "#d3d2e2",
			"20": "#e9e8f0"
		}
	},
	fonts: {
		heading: 'Antonio',
		body: 'Montserrat',
	},
	styles: {
		global: {
			"html, body": {
				bg: 'blue.985',
				color: 'gray.50',
			}
		}
	}
})