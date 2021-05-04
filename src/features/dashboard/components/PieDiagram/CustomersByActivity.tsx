import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { useAppSelector } from 'src/store'
import { selectCustomersByActivity } from 'src/store/slices/dashboard'

import styles from '../styles.module.scss'

import { config } from './PieConfig'


export const CustomersByActivity: React.FC = () => {
  const customersByActivity = useAppSelector(selectCustomersByActivity)

  return customersByActivity && (
    <div className={styles.pieDiagramWrapper}>
      <ResponsivePie
        data={customersByActivity}
        id='activity'
        legends={[{
          anchor: 'top-left',
          direction: 'column',
          justify: false,
          itemWidth: 100,
          itemHeight: 20,
          itemsSpacing: 0,
          symbolSize: 20,
          itemDirection: 'left-to-right',
        }]}
        colors={[
          '#65b7f3',
          '#3c9ae8',
          '#177ddc',
          '#15395b',
        ]}
        {...config}
      />
    </div>
  )
}
