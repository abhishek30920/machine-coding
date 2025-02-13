import React, { useEffect, useState } from 'react'
import View from './View'

function InfiniteScroll() {
  const [response,setResponse]=useState([])
  const [page,setPage]=useState(0)
  const [loading,setLoading]=useState(0)
  const getdata=async()=>{
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts?`+new URLSearchParams({
      _limit:9,
      _page:page
    }))
    const data=await res.json()
    setResponse(oldData=>[...oldData,...data])
    setLoading(false)
  }
 
  useEffect(()=>{
    getdata()
  },[page])

  const handleInfiniteScroll=async()=>{
    if(window.innerHeight+document.documentElement.scrollTop>=document.documentElement.scrollHeight){

      setLoading(true)
      setPage(prev=>prev+1)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',handleInfiniteScroll)
  },[])


return (
  <>
    <View response={response}/>
    {loading && <div className='loading'></div>}
  </>
)

}

export default InfiniteScroll