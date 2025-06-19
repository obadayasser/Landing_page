import React, { useEffect } from 'react'
import './About.css'
import AOS from 'aos'

const About = () => {
  useEffect(()=>{
    AOS.init({duration: 1500})
  },[])
  return (
    <section id='About' className='About'>
        <div  className="about-text"
       data-aos="fade-up"
     data-aos-easing="ease-out"
     data-aos-duration="1500"
     data-aos-once="true"	
     >


        
            <h1

            
            >About Us</h1>
            <p>We are a leading company in software solutions and innovation, offering comprehensive services to our clients since 2021. We take pride in our expertise and dedication to effectively and creatively achieving your goals. Our mission is to support and guide you towards success and excellence in the digital business world. Join us today and experience the difference!</p>
        </div>

    </section>
  )
}

export default About
