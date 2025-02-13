import React, { useMemo, useState } from 'react'

const StarRating = ({limit=5,ratings=2}) => {
     const [rating,setRating]=useState(ratings)
      let stars=useMemo(()=>Array.from({length:limit},(_,i)=>i+1))
    console.log(stars)

const handleClick=(e)=>{
  setRating(Number(e.target.dataset.index));
}
//e.target.dataset.index
// e.target refers to the clicked HTML element (a <span> in this case).
// .dataset is an object containing all data- attributes of that element.
// .index accesses the value of data-index from the clicked element.
  return (
    <div>
      {
       stars.map((i)=>(
        <span 
        key={i}
        className={`star ${i<=rating ?"rated" :""}`}
        onClick={handleClick}
        data-index={i}
        >★</span>
       ))
      }
    </div>
  )
}

export default StarRating