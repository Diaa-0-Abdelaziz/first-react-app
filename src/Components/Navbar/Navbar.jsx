import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './css/navbar.css'
export default function Navbar() {
 let location =  useLocation()
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient">
  <div className="container p-3">
    <Link className="navbar-brand fs-4 fw-bolder" to="">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto fs-5 fw-bolder">
        <li className={location.pathname === '/about' ? 'bg' : ''}>
          <Link  className="links" aria-current="page" to="about">ABOUT</Link>
        </li>
        <li className={location.pathname === '/portfolio' ? 'bg' : ''}>
          <Link  className="links" to="portfolio">PORTFOLIO</Link>
        </li>
        <li className={location.pathname === '/contact' ? 'bg' : ''}>
          <Link  className="links" to="contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
