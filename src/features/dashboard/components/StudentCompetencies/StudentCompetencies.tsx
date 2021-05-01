import React from 'react'

import styles from '../styles.module.scss'

export const StudentCompetencies: React.FC = () => {

  const data = [
    {
      competence: 'Unity',
      value: 12,
    },
    {
      competence: 'Tensorflow',
      value: 42,
    },
    {
      competence: 'OpenCV',
      value: 31,
    },
    {
      competence: 'PHP',
      value: 24,
    },
    {
      competence: 'Мобильная разработка',
      value: 10,
    },
    {
      competence: 'Vue.js',
      value: 13,
    },
    {
      competence: 'React Native',
      value: 89,
    },
    {
      competence: 'ReactJS',
      value: 43,
    },
  ]

  const listItems = data.map((item, index) => (
    <div
      key={index}
    >
      <p>{item.competence}</p>
      <h3>{item.value}%</h3>
    </div>
  ))

  return (
    <div className={styles.competenciesWrapper}>
      {listItems}
    </div>
  )
}
