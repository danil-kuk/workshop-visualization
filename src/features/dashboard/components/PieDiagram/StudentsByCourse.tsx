import React from 'react'
import { ResponsivePie } from '@nivo/pie'


import styles from '../styles.module.scss'
import { useAppSelector } from '../../../../store'
import { selectStudentsByCourse } from '../../../../store/slices/dashboard'

import { config } from './PieConfig'


export const StudentsByCourse: React.FC = () => {
  const studentsByCourse = useAppSelector(selectStudentsByCourse)

  return studentsByCourse && (
    <div className={styles.pieDiagramWrapper}>
      <ResponsivePie
        data={studentsByCourse}
        id='course'
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
