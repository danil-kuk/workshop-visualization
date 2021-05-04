import React from 'react'

import { AppHeader } from '../AppHeader'

import style from './style.module.scss'

export const AppBaseLayout: React.FC = ({ children }) => (
  <>
    <AppHeader />
    <section className={style.section}>
      <div className={style.main}>
        {children}
      </div>
    </section>
  </>
)
