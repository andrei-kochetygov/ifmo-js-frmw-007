import React from 'react'
import range from 'lodash/range'
import Icon from './Icon'
import './Stars.css'

const Stars = ({ amount }) => (
  <div className="Stars">
    {range(amount).map(key => (
      <Icon className="Stars__Star" name="star" key={key}/>
    ))}
  </div>
)

export default Stars