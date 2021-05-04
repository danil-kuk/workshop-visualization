import { ResponsivePie } from '@nivo/pie'
import { CustomersByAreaModel } from 'src/models'

import styles from '../styles.module.scss'

import { config } from './PieConfig'

interface Props {
  data: CustomersByAreaModel[]
}

export const CustomersByArea: React.FC<Props> = ({ data }) => (
  <div className={styles.pieDiagramWrapper_s}>
    <ResponsivePie
      data={data}
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
