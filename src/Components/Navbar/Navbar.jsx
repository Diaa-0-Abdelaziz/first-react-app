import React from 'react'
import { Link } from 'react-router-dom'
import './css/navbar.css'
export default function Navbar() {
function getPathName(e){

  const getPathAttripute = e.target.getAttribute("href");
  const targetLocation = new URL(getPathAttripute, window.location.href)
    console.log(targetLocation.pathname)

    let targetLink = e.target.parentElement
    let otherLink = e.target.parentElement.parentElement.children
    const leo = ''
    Array.from(otherLink).forEach((link)=>{
      if(link !== targetLink){
        link.classList.remove("bg")
      }else{
        link = leo
      }
    })
    if(targetLocation.pathname === getPathAttripute){
      targetLink.classList.add("bg")
    }
     if(targetLocation.pathname === "/"){
      targetLink.classList.remove("bg")
      console.log('Class removed from target link');
    }

    if (leo) {
      console.log('Link to Remove Class:', leo);
      console.log('Actual Pathname:', targetLocation.pathname);
      console.log('Expected Pathname:', getPathAttripute);
  
      // ... Rest of your code
    } else {
      console.log('Link element not found');
    }

  }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient">
  <div className="container p-3">
    <Link onClick={getPathName} className="navbar-brand fs-4 fw-bolder" to="">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto fs-5 fw-bolder">
        <li className="">
          <Link onClick={getPathName} className="links" aria-current="page" to="about">ABOUT</Link>
        </li>
        <li className="">
          <Link onClick={getPathName} className="links" to="portfolio">PORTFOLIO</Link>
        </li>
        <li className="">
          <Link onClick={getPathName} className="links" to="contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
