import React from 'react'
import bg1 from "../../assets/1.jpg"
import bg2 from "../../assets/4.jpg"
import bg3 from "../../assets/3.jpg"

import './Slide.css'
const Slide = () => {
  return (
<div className="slide">
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel"> 
  <div className="carousel-indicators">
    
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={bg2}className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={bg1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={bg3} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
  <i id='btn1' className="bi bi-chevron-compact-left" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
  <i id='btn1' className="bi bi-chevron-compact-right" />

    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  )
}

export default Slide
