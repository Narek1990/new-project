import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../images/Logo.svg"
import Play from "../../images/Play Button.svg"
import Ellipse from "../../images/Ellipse.svg"
import Profile from "../../images/Profile.svg"
import "./Navbar.css"

export const Navbar=()=> {
  return <div className='header'>
 <FontAwesomeIcon icon={faBars} className='fabar fa-2x'/>
 <img  className="Logo"alt="" src={Logo}/>
 <div>
 <img  className="icons"alt="" src={Ellipse}/>
 <img className="icons" alt="" src={Play}/>
 <img className="icons" alt="" src={Profile}/>
 </div>
  </div>;
}
