import React from 'react'

export default function Header({title, bgColor , textColor}) {
  return (
    <header style={{background: bgColor, color: textColor}}>
      <div className='container'>
        <h3> {title}</h3>
      </div>
    </header>
  )
}
