import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../src/assets/css/styling.css";




const Header = () => {
  return (

    <header>

      <nav className="navbar navbar-expand-lg bg-white-50  p-3">

        <div className="container ">
          <div className="logo">
            <a className="navbar-brand">
              <img src="https://bootstrapmade.com/demo/templates/Medicio/assets/img/logo.png" alt="" />
            </a>
          </div>
          <div className="menu">
            <ul className='navbar-nav'>
              <li className='nav-item'><a className='nav-link fw-semibold' href="">HOME</a></li>
              <li className='nav-item'><a className='nav-link fw-semibold' href="">ABOUT</a></li>
              <li className='nav-item'><a className='nav-link fw-semibold' href="">SERVICES</a></li>
              <li className='nav-item'><a className='nav-link fw-semibold' href="">DEPARTMENTS</a></li>
              <li className='nav-item'><a className='nav-link fw-semibold' href="">DOCTORS</a></li>
              <li className='nav-item'><a className='nav-link fw-semibold' href="">DROP DOWN</a></li>
              <li className='nav-item'><a className='nav-link fw-semibold' href="">CONTACT</a></li>

              <button className='appointment-btn'>Make an Appoinment </button>
            </ul>

          </div>

        </div>

      </nav>
    </header>

  )
}

export default Header