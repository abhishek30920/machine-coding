import React from 'react'

const View = ({response}) => {
  return (
    <div className='wrapper'>
      <h1>Infinite Scroll</h1>
      {response.map((resp,index)=>(
        <div key={index} className='card'>
        <h2>{resp.title.substr(0,15)}</h2>
      <p>{resp.body}</p>

        </div>
      ))}
    </div>
  )
}

export default View