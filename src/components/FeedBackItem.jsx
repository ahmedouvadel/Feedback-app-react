import React from 'react'
import { VscErrorSmall } from "react-icons/vsc";

export default function FeedBackItem({feedback , deleteFeedback}) {
  
  return (
    <div className='card'>
      <div className='close' onClick={()=>deleteFeedback(feedback._id)}><VscErrorSmall color='red' /></div>
      <div className='num-display'>{feedback.rating}</div>
      <div className='text-display'>{feedback.text}</div>
    </div>
  )
}
