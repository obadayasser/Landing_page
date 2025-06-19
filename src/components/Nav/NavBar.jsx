import React from 'react'
import './NavBar.css'
const NavBar = () => {
  return (
       <nav className="navbar navbar-expand-lg link-light ">
  <div className="container-fluid">
    <div className="ICNA">
    <a data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">primary menu</a>
    </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="travel-nav-link nav-link active link-light " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="travel-nav-link nav-link link-light " href="#About" >About</a>
        </li>
        <li className="nav-item">
          <a  className="travel-nav-link nav-link link-light " href="#Services">Services</a>
        </li>
        <li className="nav-item">
          <a className="travel-nav-link nav-link link-light " href="#project">Project</a>
        </li>
        <li className="nav-item">
          <a className="travel-nav-link nav-link link-light " href="#Footer">Contact</a>
        </li>
      </ul>

    </div>
  </div>
</nav>
  )
}

export default NavBar
