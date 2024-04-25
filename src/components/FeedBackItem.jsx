import React from 'react'
import { VscErrorSmall } from "react-icons/vsc";
import { CiEdit } from "react-icons/ci";
import { Link } from 'react-router-dom';

export default function FeedBackItem({item, feedback , deleteFeedback, editFeedback}) {
  
  return (
    <div className='card'>
      <div className='close' onClick={()=>deleteFeedback(feedback._id)}><VscErrorSmall color='red' /></div>
       <div className='edit' onClick={()=>editFeedback(feedback)}><CiEdit  color='red' /></div>
       <Link to={'/details/'}></Link>
       <div className='num-display'>{feedback.rating}</div>
      <div className='text-display'>{feedback.text}</div>
    </div>
  )
}
