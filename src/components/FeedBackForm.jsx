import React, { useState } from 'react'

export default function FeedBackForm({CreateFeed}) {

  const [text , setText] = useState('test')
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
  return (
    <div className='card'>
      <h2> How would you rate your service with us ?</h2>

      <div className='input-group'>
        <input value={text} onChange={textHandler}/>
        <button className='btn btn-secondary' disabled={btndisabeled} 
        onClick={()=> {
          CreateFeed(text);
          setText('')
        }

        } > Send</button>
      </div>
      {Message}
      
    </div>
  )
}
