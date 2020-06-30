import React from 'react'
import classNames from 'classnames'
import './Icon.css'

const Icon = ({ name, className }) => (
  <svg className={classNames('Icon', className)}>
    <use xlinkHref={`#${name}`}/>
  </svg>
)

export default Icon