import React from 'react';
import { NavLink } from 'react-router-dom';
import "./TopList.css"

export const TopList=()=> {
  return <div className='toplist'>
    <NavLink className="titles" to='/series'>series</NavLink>
    <NavLink className="titles" to='/topics'>topics</NavLink>
    <NavLink className="titles" to="/picks">picks</NavLink>
    <NavLink className="titles" to="/festival">nowness digital festival</NavLink>
    <NavLink className="titles" to="/programs">special programs</NavLink>
    <NavLink className="titles" to="/awards">nowness awards</NavLink>
  </div>;

}
