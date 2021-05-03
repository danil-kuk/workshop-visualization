import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { useAppSelector } from 'src/store'
import { selectCustomersByArea } from 'src/store/slices/dashboard'

import styles from '../styles.module.scss'

import { config } from './PieConfig'


export const CustomersByArea: React.FC = () => {
  const customersByArea = useAppSelector(selectCustomersByArea)

  return customersByArea && (
    <div className={styles.pieDiagramWrapper_s}>
      <ResponsivePie
        data={customersByArea}
        id='area'
        legends={[{
          anchor: 'bottom-left',
          direction: 'column',
          justify: false,
          itemWidth: 100,
          itemHeight: 20,
          itemsSpacing: 0,
          symbolSize: 20,
          itemDirection: 'left-to-right',
        }]}
        colors={[
          '#177ddc',
          '#15395b',
        ]}
        {...config}
      />
    </div>
  )
}
