import React from 'react'
import { NavLink } from 'react-router-dom'
// import home from './home'
// import shoulders from './shoulders'
// import back from './back'
// import chest from './chest'



function Random() {
  return (
    <div className="p-20">
      <NavLink to='Back' className="text-3xl text-white">Home</NavLink>
      <NavLink to='Shoulders' className="text-3xl text-white">Workouts</NavLink>
      <NavLink to='Chest' className="text-3xl text-white">About</NavLink>
    </div>
  )
}

export default Random
