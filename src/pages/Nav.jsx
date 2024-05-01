import React from 'react'
import { NavLink } from 'react-router-dom'
import home from './home'
import shoulders from './workouts/shoulders'



function Nav() {
  return (
    <div className="p-20">
      <NavLink to={home} className="text-3xl text-white">Home</NavLink>
      <NavLink to={shoulders} className="text-3xl text-white">Workouts</NavLink>
      <NavLink to={home} className="text-3xl text-white">About</NavLink>
    </div>
  )
}

export default Nav
