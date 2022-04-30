import { SimpleGrid } from '@chakra-ui/react'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { DashboardWraper } from 'src/components/DashboardWrapper'
import { DashboardItem } from 'src/components/DashboardWrapper/DashboardItem'
import { options, series } from 'src/utils/chartData'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const Dashboard: NextPage = () => {
  return (
    <DashboardWraper>
      <SimpleGrid
        flex="1"
        gap="4"
        minChildWidth="320px"
        alignItems="space-between"
      >
        <DashboardItem title="Inscritos da semana">
          <Chart type="area" height="160" options={options} series={series} />
        </DashboardItem>
        <DashboardItem title="Taxa de abertura">
          <Chart type="area" height="160" options={options} series={series} />
        </DashboardItem>
      </SimpleGrid>
    </DashboardWraper>
  )
}

export default Dashboard
