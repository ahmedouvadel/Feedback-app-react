import React from 'react'
import FeedBackItem from './FeedBackItem'

export default function FeedBackList( {feedbacks = [], deleteFeedback}) {
  return (
    <div>
      {
        feedbacks.map((item, index)=>
        <FeedBackItem key={index} feedback={item} deleteFeedback={deleteFeedback}/>
        )
      }
    </div>
  )
}
