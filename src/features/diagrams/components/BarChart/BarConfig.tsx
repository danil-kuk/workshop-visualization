import { FONT_COLOR, FONT_FAMILY } from '../ChartConstants'
import styles from '../style.module.scss'


export function GetTooltip(title: string) {
  return function Tooltip({ value, color } : { value: number, color: string }){
    return (
      <div className={styles.tooltipWrapper}>
        <span style={{ background: color }}/>
        <span>Количество {title}: {value}</span>
      </div>
    )
  }
}

export const BarTheme = {
  fontFamily: FONT_FAMILY,
  textColor: FONT_COLOR,
  fontSize: 12,
  axis: { ticks: { text: { fontSize: 10 } } },
  tooltip: {
    container: {
      background: 'var(--bg-main)',
      borderRadius: 'var(--border-radius)',
    },
  },
}
