import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { useAppSelector } from 'src/store'
import { selectKeyTechnologyStudents } from 'src/store/slices/dashboard'

import styles from '../styles.module.scss'

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
          bottom: 30,
          left: 40,
        }}
        padding={0.6}
        colors={['#177ddc']}
        axisLeft={{ tickSize: 0 }}
        axisBottom={{ tickSize: 0 }}
        labelTextColor="#ffffff"
        animate={false}
        isInteractive={false}
        theme={BarTheme}
      />
    </div>
  )
}
