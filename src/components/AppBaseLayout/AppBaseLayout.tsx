import React from 'react'


import style from './style.module.scss'

export const AppBaseLayout: React.FC = ({ children }) => (
  <>
    <section className={style.section}>
      <div className={style.main}>
        {children}
      </div>
    </section>
  </>
)
