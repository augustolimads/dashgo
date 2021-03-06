import { theme } from '@chakra-ui/react'

export const options = {
  chart: {
    toolbar: {
      show: false
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
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    }
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  },
  categories: [
    '2021-03-18T00:00:00.000Z',
    '2021-03-19T00:00:00.000Z',
    '2021-03-20T00:00:00.000Z',
    '2021-03-21T00:00:00.000Z',
    '2021-03-22T00:00:00.000Z',
    '2021-03-23T00:00:00.000Z',
    '2021-03-24T00:00:00.000Z'
  ]
}

export const series = [{ name: 'series1', data: [10, 41, 35, 51, 49, 62, 69] }]
