import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {

  const navigate = useNavigate()

  const ask = () => {
    if(window.confirm('test')){
      navigate('/feedback')
    }
  }
  return (
    <div>
      About

      <button onClick={ask} className='btn btn-secondary'>click</button>
    </div>
  )
}

export default About
