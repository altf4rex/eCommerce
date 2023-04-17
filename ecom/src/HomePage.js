import React from 'react'
import FirstComponetHome from './FirstComponetHome.js'
const HomePage = ({categories}) => {
  return (
    <div>
        <FirstComponetHome categories={categories}/>
    </div>
  )
}

export default HomePage