import React from 'react'
import Egypt from '../../assets/egypt.png'
import UAE from '../../assets/united-arab-emirates.png'
import USA from '../../assets/united-states-of-america.png'
import './Flag.css'

const Flag = () => {
  return (
    <div className="flag">
      <img src={USA}  />
    <img src={Egypt}  />
    <img src={UAE}  />
  </div>
  )
}

export default Flag
