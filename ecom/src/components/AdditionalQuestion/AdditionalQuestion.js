import React from 'react'

const AdditionalQuestion = ({currentInformation}) => {
  return (
    <>
    {
     currentInformation.map(c => 
         <div className='description' key={c.name}>
           <div>
             <h4 className='description__origins'>Origins</h4>
             <p className='description__origins'>{c.origins}</p>
           </div>
           <div>
             <h4 className='description__origins'>How to cook</h4>
             <p className='description__origins'>{c.recipe}</p>
           </div>
           <div>
             <h4 className='description__origins'>Full of Vitamins!</h4>
           </div>
         </div>
       )
    }
 </>
  )
}

export default AdditionalQuestion