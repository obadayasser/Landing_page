import React from 'react'
import './LC.css'
import LG1 from '../../assets/FB_IMG_1718798587947-removebg-preview.png'
const LC = () => {
  return (
    <div className="LCC">
    <div className="container">
        <div className="left-l">
            <a href="#">
              <img  src={LG1} alt="" />
              <h4>NG-Technology</h4>
              
              </a>
            
        </div>
        <div className="right-i">

            <a target='_blank' href="https://www.linkedin.com/company/thesmartest-ai/"><i className="fa-brands fa-linkedin" /></a>
            <a target='_blank' href="https://www.facebook.com/profile.php?id=61561135462623"><i className="fa-brands fa-facebook-f" /></a>
            <a target='_blank' href="https://wa.me/201026270790"><i className="fa-brands fa-whatsapp" /></a>
            <a target='_blank' href="https://www.instagram.com/ngtechnologiii?igsh=MWM5ZjczNXp4OWk4Mw=="><i className="fa-brands fa-instagram" /></a>
            <a href="https://www.pinterest.com/NGTechn0l0gy/" target="_blank"><i className="fa-brands fa-pinterest" /></a> 
            <a target='_blank' href="https://www.youtube.com/@TheSmartestAl/videos"><i className="fa-brands fa-youtube" /></a>
        </div>
    </div>
    </div>
  )
}

export default LC
