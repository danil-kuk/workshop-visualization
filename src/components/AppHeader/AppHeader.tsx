import React from 'react'
import { Link } from 'react-router-dom'
import { publicUrlPath } from 'src/utils/publicUrlPath'

import pack from '../../../package.json'

import style from './style.module.scss'

export const AppHeader: React.FC = () => (
  <header>
    <Logo />
  </header>
)

const Logo: React.FC = () => (
  <div
    className={style.logo}
    title={`Версия системы ${pack.version}`}
  >
    <Link to={publicUrlPath('/')} />
  </div>
)
