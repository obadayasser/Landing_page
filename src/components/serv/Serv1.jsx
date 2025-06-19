import React from 'react'
import './Serv1.css'
import Serv1 from '../../assets/2122121.jpg'
const Serv = () => {
  return (
    <div className="serv">
      <a>
        <div className="img-serv">
        <img src={Serv1}  />
        </div>
      <p>Since our launch, we have built over 500+ success stories with our clients</p>
      </a>
    </div>
  )
}

export default Serv
