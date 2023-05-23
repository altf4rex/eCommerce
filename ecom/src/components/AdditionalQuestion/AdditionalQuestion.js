import React from 'react'
import "./add-question.css"
const AdditionalQuestion = ({currentInformation}) => {
  return (
    <>
    {
     currentInformation.map(q => 
         <div className='description' key={q.id}>
           <p className='description-question'>{q.question}</p> 
           <p className='description-answer'>{q.answer}</p> 
         </div>
       )
    }
 </>
  )
}

export default AdditionalQuestion