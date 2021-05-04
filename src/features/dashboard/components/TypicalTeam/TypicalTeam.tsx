import { TypicalTeamModel } from 'src/models'

import styles from '../styles.module.scss'

interface Props {
  data: TypicalTeamModel[]
}

export const TypicalTeam: React.FC<Props> = ({ data }) => (
  <div className={styles.typicalTeamWrapper}>
    {data.map((item, index) => (
      <div
        key={index}
        className={styles.underlineListItem}
      >
        <h4>{item.studentsCount}x</h4>
        <p>{item.role}</p>
      </div>
    ))}
  </div>
)
