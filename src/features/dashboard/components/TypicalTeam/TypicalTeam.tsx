import React from 'react'

import styles from '../styles.module.scss'

export const TypicalTeam: React.FC = () => {

  const data = [
    'Frontend-разработчик',
    'Backend-разработчик',
    'Дизайнер',
    'Аналитик',
    'Рандомный чел',
  ]

  const listItems = data.map((item, index) => (
    <div
      className={styles.underlineList}
      key={index}
    >
      <h4>1x</h4>
      <p>{item}</p>
    </div>
  ))

  return (
    <div className={styles.typicalTeamWrapper}>
      {listItems}
    </div>
  )
}
