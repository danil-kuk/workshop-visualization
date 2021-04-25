import { FONT_FAMILY, FONT_COLOR } from '../ChartConstants'
import styles from '../style.module.scss'

export function GetTooltip(title: string) {
  const Component = ({ value, color }: { value: number, color: string }) => (
    <div className={styles.tooltipWrapper}>
      <span style={{ background: color }} />
      <span>Количество {title}: {value}</span>
    </div>
  )

  return Component
}

export const BarTheme = {
  fontFamily: FONT_FAMILY,
  textColor: FONT_COLOR,
  fontSize: 14,
  axis: { ticks: { text: { fontSize: 14 } } },
  tooltip: {
    container: {
      background: 'var(--bg-main)',
      borderRadius: 'var(--border-radius)',
    },
  },
}
