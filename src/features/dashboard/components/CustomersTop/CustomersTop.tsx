import React from 'react'
import { getWordForm } from 'src/utils/stringUtils'
import { CustomersTopModel } from 'src/models'

import styles from '../styles.module.scss'

interface Props {
  data: CustomersTopModel[]
}

export const CustomersTop: React.FC<Props> = ({ data }) => (
  <ol className={styles.topCustomerWrapper}>
    {data.map((item, index) => (
      <div
        className={styles.underlineListItem}
        key={index}
      >
        <li>{item.name}</li>
        <h3>
          {item.projectsCount}
          {getWordForm(item.projectsCount, 'проект', 'проекта', 'проектов')}
        </h3>
      </div>
    ))}
  </ol>
)
