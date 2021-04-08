import React from 'react'

import styles from '../style.scss'
import { FONT_FAMILY, FONT_COLOR } from '../ChartConstants'

export const GetTooltip = (title: string) => ({ value, color }: { value: number, color: string }) => (
  <div className={styles.tooltipWrapper}>
    <span style={{ background: color }} />
    <span>Количество {title}: {value}</span>
  </div>
)

export const BarTheme = {
  fontFamily: FONT_FAMILY,
  textColor: FONT_COLOR,
  fontSize: 14,
  axis: {
    ticks: {
      text: {
        fontSize: 14,
      },
    },
  },
  tooltip: {
    container: {
      background: 'var(--bg-main)',
      borderRadius: 'var(--border-radius)',
    },
  },
}
