import { Flex, SimpleGrid, Box, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

import { theme } from '../styles/theme';

// Carregamento dinâmico
const Chart = dynamic( () => import('react-apexcharts'), {
	ssr: false, // false = Carrega do lado do browser
});

const optionsData = {
	chart: {
		toolbar: {
			show: false,
		},
		zoom: {
			enabled: false,
		},
		foreColor: '#9795c3',
	},
	grid: {
		show: false,
	},
	dataLabels: {
		enabled: false,
	},
	tooltip: {
		enabled: true,
		fillSeriesColor: true,
		theme: false,
      style: {
        fontSize: '14px',
        fontFamily: theme.body,
      },
		onDatasetHover: {
          highlightDataSeries: false,
      },
		marker: {
			show: true,
	  	},
	},
	xaxis: {
		type: 'datetime',
		axisBorder: {
			color: theme.colors.blue[50]
		},
		axisTicks: {
			color: theme.colors.blue[50]
		},
		categories: [
			'2021-04-20T00:00:00.000Z',
			'2021-04-21T00:00:00.000Z',
			'2021-04-22T00:00:00.000Z',
			'2021-04-23T00:00:00.000Z',
			'2021-04-24T00:00:00.000Z',
			'2021-04-25T00:00:00.000Z',
			'2021-04-26T00:00:00.000Z',
		]
	},
	fill: {
		opacity: 0.2,
		type: 'gradient',
		gradient: {
			shade: 'dark',
			opacityFrom: 0.6,
			opacityTo: 0.25,
		}
	},
};

const seriesData = [
	{ 
		name: 'sales', 
		data: [30, 45, 50, 65, 70, 85, 115] 
	}
]

export default function Dashboard() {
	return (
		<Flex direction="column" height="100vh">
			<Header />

			<Flex 
				width="100%" 
				maxWidth={1480} 
				minHeight="100%" 
				marginX="auto" 
			>
				<Sidebar />

				<SimpleGrid 
					flex="1" 
					gap="5" 
					w="100%"
					h="5" 
					minChildWidth="340px"
					align="flex-start"
					paddingX="6"
					paddingTop="115px"
				>
					<Box
						paddingX="7" paddingY="5"
						bg="blue.975" 
						borderRadius={8}
						// paddingBottom="4"
					>
						<Text 
							w="auto"
							fontSize="lg" 
							fontWeight="600" 
							color="blue.70" 
							marginBottom="3" 
							paddingBottom="2" 
							borderBottom="1px" 
						>
							Inscritos da semana
						</Text>
						<Chart options={optionsData} series={seriesData} type="area" />
					</Box>

					<Box
						paddingX="7" paddingY="5"
						bg="blue.975" 
						borderRadius={8}
						// paddingBottom="4"
					>
						<Text 
							w="auto"
							fontSize="lg" 
							fontWeight="600" 
							color="blue.70" 
							marginBottom="3" 
							paddingBottom="2" 
							borderBottom="1px" 
						>
							Taxa de visualização
						</Text>
						<Chart options={optionsData} series={seriesData} type="area" />
					</Box>
				</SimpleGrid>
			</Flex>
		</Flex>
	);
}