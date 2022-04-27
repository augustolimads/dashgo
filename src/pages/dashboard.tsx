import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { DashboardWraper } from 'src/components/DashboardWraper'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enable: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    color: theme.colors.gray[600]
  },
  axisTicks: {
    color: theme.colors.gray[600]
  },
  categories: [
    '2021-03-18T00:00:00.000Z',
    '2021-03-19T00:00:00.000Z',
    '2021-03-20T00:00:00.000Z',
    '2021-03-21T00:00:00.000Z',
    '2021-03-22T00:00:00.000Z',
    '2021-03-23T00:00:00.000Z',
    '2021-03-24T00:00:00.000Z'
  ],
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
}

const series = [{ name: 'series1', data: [10, 41, 35, 51, 49, 62, 69] }]

const Dashboard: NextPage = () => {
  return (
    <DashboardWraper>
      <SimpleGrid
        flex="1"
        gap="4"
        minChildWidth="320px"
        alignItems="space-between"
      >
        <Box p="8" bg="gray.800" borderRadius={8} pb="4">
          <Text fontSize="lg" mb="4">
            Inscritos da semana
          </Text>
          <Chart type="area" height="160" options={options} series={series} />
        </Box>
        <Box p="8" bg="gray.800" borderRadius={8}>
          <Text fontSize="lg" mb="4">
            Taxa de abertura
          </Text>
          <Chart type="area" height="160" options={options} series={series} />
        </Box>
      </SimpleGrid>
    </DashboardWraper>
  )
}

export default Dashboard
