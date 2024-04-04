import React, { useEffect, useState } from 'react'

export default function FeedBackForm({CreateFeed, editFeedItem}) {

  const [text , setText] = useState('test');
  const [rating, setRating] = useState(10);
  const [Message, setMessage] = useState('')
  const [btndisabeled, setbtndisabled] = useState(true)
  
  const textHandler =(event)=> {
    let review = event.target.value 
    setText(review)
    if(text.length <10 ){ 
      setMessage('At least 10 caracters')
      setbtndisabled(false)
    }else{
        setMessage('')
      }
  }

     useEffect(()=> {
        if(editFeedItem){
         setText(editFeedItem.text)
         setRating(editFeedItem.rating)
    }
  }, [editFeedItem])
  

  return (
    <div className='card'>
      <h2> How would you rate your service with us ?</h2>

      <div>
        <ul className='rating' >
          {
            [1,2,3,4,5,6,7,8,9,10].map((nb) => (
              <li>
            <input type='radio' value={nb} id={'nb'+nb} name='rating' checked={rating ===nb}
            onChange={()=> setRating(nb)} />
            <label htmlFor={'nb'+nb}>{nb}</label>
          </li>
            ))
          }
        </ul>
      </div>

      <div className='input-group'>
        <input value={text} onChange={textHandler}/>
        <button className='btn btn-secondary' disabled={btndisabeled} 
        onClick={()=> {


          let new_feedback = {text, rating};
          CreateFeed(new_feedback);
          setText('')
        }

        } > Send</button>
      </div>
      {Message}
      
    </div>
  )
}
