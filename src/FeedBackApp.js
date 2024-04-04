import React, { useState } from 'react'
import Header from './components/Header';
import { feedbackData } from './data/feedback_data';
import FeedBackStats from './components/FeedBackStats';
import FeedBackList from './components/FeedBackList';
import FeedBackForm from './components/FeedBackForm';

export default function FeedBackApp() {

  //const feedbacks = feedbackData 
  const [feedbacks, setfeedbacks ] = useState(feedbackData)

  const [loading , setLoading]= useState(true)
  setTimeout(() => {
    setLoading(false)
    console.log('test 200 ' + loading)
  }, 2000);
  if (loading) return <h2>Loading .... </h2>

  const removeFeedBack = (feedbackId)=> {
    console.log("feedback" + feedbackId)
    setfeedbacks (feedbacks.filter((feed)=> feed._id !== feedbackId ))
  }

  const createFeedback = (text)=>{
    console.log('text')
    let newFeedback = {
      _id : '6',
      text : text,
      rating : 10
    }
    setfeedbacks ([newFeedback, ...feedbacks])
  }
  return (
    <div>
      <Header title="FeedBack App" textColor="#ffea81" />
      <div className='container'>
      <FeedBackForm  CreateFeed={createFeedback} />
      <FeedBackStats feedbacks={feedbacks} />
      <FeedBackList feedbacks={feedbacks} deleteFeedback={removeFeedBack}  />
      </div>
      
    </div>
  )
}
