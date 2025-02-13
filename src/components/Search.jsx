import React, { useState } from 'react'

function Search() {
  const [input,setInput]=useState("")
  const [list,setList]=useState(['APPLE','KIWI'])
  let seachresult=list.filter(item=>item.toLowerCase()==input.toLowerCase())
  // here we can use includes also 
  console.log(seachresult)
  return (
    <div>
      <input placeholder='search' onChange={(e)=>setInput(e.target.value)}></input>
      <ul>
        {seachresult.map((i,index)=>(
        <div key={index}>
          <ul>{i}</ul>
        </div>
        ))}
      </ul>
    </div>
  )
}

export default Search