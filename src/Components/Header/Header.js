import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../images/Logo.svg"
import Play from "../../images/Play Button.svg"
import Ellipse from "../../images/Ellipse.svg"
import Profile from "../../images/Profile.svg"
import "./header.css"
import { Link, NavLink} from 'react-router-dom';

export const Header=()=> {
  return<div className='MainHeader'>
   <div className='header'>
 <FontAwesomeIcon icon={faBars} className='fabar fa-2x'/>
 <Link to='/'>
 <img  className="Logo"alt="" src={Logo}/>
 </Link>
 <div className='iconbox'>
 <img  className="icons"alt="" src={Ellipse}/>
 <img className="icons" alt="" src={Play}/>
 <img className="icons" alt="" src={Profile}/>
 </div>
  </div>

    <div className='toplist'>
      <NavLink className="titles" to='/series'>series</NavLink>
      <NavLink className="titles" to='/topics'>topics</NavLink>
      <NavLink className="titles" to="/picks">picks</NavLink>
      <NavLink className="titles" to="/festival">nowness digital festival</NavLink>
      <NavLink className="titles" to="/programs">special programs</NavLink>
      <NavLink className="titles" to="/awards">nowness awards</NavLink>
    </div>
    </div>
  }
  