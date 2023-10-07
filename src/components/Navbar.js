import React from 'react'
import globe from './images/globe.png'

export default function Navbar() {
  return (
    <div className='navbar'>
      <img className='img' src={globe} alt="" />
      <span>My Travel Journel</span>
    </div>
  )
}
