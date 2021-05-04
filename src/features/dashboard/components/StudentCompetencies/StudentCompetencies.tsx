import { StudentCompetenciesModel } from 'src/models'

import styles from '../styles.module.scss'

interface Props {
  data: StudentCompetenciesModel[]
}

export const StudentCompetencies: React.FC<Props> = ({ data }) => (
  <div className={styles.competenciesWrapper}>
    {data.map((item, index) => (
      <div key={index}>
        <p>{item.competence}</p>
        <h3>{item.value}%</h3>
      </div>
    ))}
  </div>
)
