import React from 'react'
import './css/Footer.css';
import LogoW from './images/LogoW.png'
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  return (
    <div className='main-footer'>
    <div className='Logo-foot'>
       <Link to="/">
         <img src={LogoW} alt="Logo" className="Logo"/>
         </Link>
         </div>
         <div>
         <Link to ='/Story' className='buttons-footer'>About</Link>
         <Link to ='/Help' className='buttons-footer'>Help</Link>
         <Link to ='/Terms' className='buttons-footer'>Terms</Link>
         <Link to ='/Privacy' className='buttons-footer'>Privacy</Link>
</div>
         
    </div>
  )
}

export default Footer;