import React from 'react'

export default function FeedBackStats({feedbacks = []}) {
  let somme = feedbacks.reduce((acc, ele)=> acc + ele.rating , 0 )
  let average = somme/ feedbacks.length
  return (
    <div className='feedback-stats'>
        <h3>Reviews ({feedbacks.length}) </h3>
        <h3>Average Rating : {isNaN(average) ? '0' : average.toFixed(1)} </h3>
      </div>
  )
}
