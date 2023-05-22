import React from 'react'

const AdditionalDescription = ({currentInformation}) => {
    

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
                {
                  c.vitamins.map(v => 
                      <div key={v.name}>
                        <p className='description__origins'>{v.name}</p>
                        <p className='description__origins'>{v.quantity}</p>
                        <p className='description__origins'>{v.dv}</p>
                      </div>
                    )
                }
              </div>
              
              
            </div>
          )
       }
    </>
  )
}

export default AdditionalDescription