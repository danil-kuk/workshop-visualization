import { WordCloudConfig } from '@ant-design/charts/es/wordCloud'
import { CompetenciesModel } from 'src/models'

import { CLOUD_COLORS, CLOUD_HEIGHT } from '../ChartConstants'

export const configBuilder = (data : CompetenciesModel[]): WordCloudConfig => ({
  data,
  height: CLOUD_HEIGHT,
  autoFit: false,
  wordField: 'competency',
  weightField: 'value',
  colorField: 'competencyType',
  color: CLOUD_COLORS,
  padding: 10,
  wordStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: [12, 80],
    rotation: [0, 0],
  },
  tooltip: {
    domStyles: {
      'g2-tooltip': {
        background: 'var(--bg-main)',
        borderRadius: 'var(--border-radius)',
        opacity: '1',
        fontSize: '0.875rem',
        fontFamily: 'var(--content-font-family)',
        color: '#000',
        padding: '5px 9px',
        lineHeight: 'normal',
      },
      'g2-tooltip-value': { marginLeft: '5px' },
      'g2-tooltip-list-item': {
        display: 'flex',
        alignItems: 'center',
        margin: '0',
      },
      'g2-tooltip-title': { margin: '0' },
      'g2-tooltip-marker': {
        marginRight: '5px',
        width: '7px',
        height: '7px',
      },
    },
  },
})
