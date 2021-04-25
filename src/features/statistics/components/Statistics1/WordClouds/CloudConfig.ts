import { WordCloudConfig } from '@ant-design/charts/es/wordCloud'

import { PRIMARY_COLOR, SECONDARY_COLOR, HEADER_FONT_FAMILY, HEIGHT } from '../ChartConstants'

export const configBuilder = (data : any): WordCloudConfig => ({
  data,
  height: HEIGHT,
  autoFit: false,
  wordField: 'competency',
  weightField: 'value',
  colorField: 'competencyType',
  color: [PRIMARY_COLOR, SECONDARY_COLOR],
  padding: 10,
  wordStyle: {
    fontFamily: HEADER_FONT_FAMILY,
    fontSize: [12, 80],
    rotation: [0, 0],
  },
})
