import React from 'react';
import "./Navbar.css" 
const Nav = () => {
  return (
   
     <div className='n-wrapper'>
        <div className="l-nav">
          <div className='l-nav-left'>
            <h1 className='andrew'>Andrew </h1>
            <div className='dark'>dark</div>
          </div>
          <div className="l-nav-right">
            <ul className='i-nav-list'>
              <li>Home</li>
              <li>Service</li>
              <li>Experiencce</li>
              <li>Portfilo</li>
              <li>Testimonials</li>
            </ul>
            <div>
              <button className='l-nav-btn'>Contact</button>
            </div>
          </div>
        </div>
       
     </div>
  )
}

export default Nav