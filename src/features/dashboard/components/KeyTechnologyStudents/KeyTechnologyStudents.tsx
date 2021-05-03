import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

import styles from '../styles.module.scss'
import { useAppSelector } from '../../../../store'
import { selectKeyTechnologyStudents } from '../../../../store/slices/dashboard'

const BarTheme = {
  fontFamily: 'var(--content-font-family)',
  textColor: 'var(--text-main)',
  fontSize: 16,
  axis: { ticks: { text: { fontSize: 10 } } },
}

export const KeyTechnologyStudents: React.FC = () => {
  const keyTechnologyStudents = useAppSelector(selectKeyTechnologyStudents)

  return keyTechnologyStudents && (
    <div className={styles.barChartWrapper}>
      <ResponsiveBar
        data={keyTechnologyStudents}
        keys={[ 'value' ]}
        indexBy="keyTechnology"
        margin={{
          top: 0,
          right: 50,
          bottom: 105,
          left: 40,
        }}
        padding={0.6}
        colors={['#177ddc']}
        axisLeft={{ tickSize: 0 }}
        axisBottom={{
          tickSize: 0,
          tickRotation: 30,
        }}
        labelTextColor="#ffffff"
        animate={false}
        isInteractive={false}
        theme={BarTheme}
      />
    </div>
  )
}
