import { ResponsivePie } from '@nivo/pie'
import { CustomersByActivityModel } from 'src/models'

import styles from '../styles.module.scss'

import { config } from './PieConfig'

interface Props {
  data: CustomersByActivityModel[]
}

export const CustomersByActivity: React.FC<Props> = ({ data }) => (
  <div className={styles.pieDiagramWrapper}>
    <ResponsivePie
      data={data}
      id='activity'
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
