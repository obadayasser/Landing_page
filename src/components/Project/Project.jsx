import React from 'react'
import './Project.css'
import Pr1 from '../../assets/111.webp'
import Pr2 from '../../assets/222.webp'
import Pr3 from '../../assets/333.webp'
const Project = () => {
  return (
    <section className='project' id='project'>
        <div className="project-text">
            <h1>Our project goes through 3 basic stages</h1>
        </div>
           <div className="projectt">
<div className="row">
<div className="col-lg-4 cards"
data-aos="fade"
data-aos-duration="3000"
     data-aos-once="true"	

>
    <div className="card">
  <div className="card-body">
<h1>1</h1> 
<img src={Pr3} alt="" />
   <h5 className="card-title6">Project study</h5>
  </div>
</div>
    </div>
<div className="col-lg-4 cards"
data-aos="fade"
data-aos-duration="3000"
     data-aos-once="true"	

>
    <div className="card">
  <div className="card-body">
  <h1>2</h1> 
<img src={Pr2} alt="" />
    <h5 className="card-title1 ">Project execution</h5>
  </div>
</div>
    </div>
<div className="col-lg-4 cards"
data-aos="fade"
data-aos-duration="3000"
     data-aos-once="true"	

>
    <div className="card">
  <div className="card-body">
  <h1>3</h1> 
<img src={Pr1} alt="" />
    <h5 className="card-title2">Handover the project</h5>
  </div>
</div>
    </div>

</div>


   </div>

    </section>
  )

}

export default Project
