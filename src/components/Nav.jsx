import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='container'>
      <div className='card'>
        <Link to="/signin" activeclassename="active">Signin</Link>
        <Link to="/feedback" activeclassename="active">Feedback</Link>
        <Link to="/about">about</Link>
      </div>
      
    </div>
  )
}

export default Nav
