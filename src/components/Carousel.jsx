import React, { useEffect, useState } from 'react'


const items=[
  {
    id:1,
    imageUrl:"https://th.bing.com/th/id/OIP.7cRYFyLoDEDh4sRtM73vvwHaDg?rs=1&pid=ImgDetMain",
    title:"item 1",
    description:"description of item 1"
  },
  {
    id:2,
    imageUrl:"https://th.bing.com/th/id/OIP.Q5fciWgMMb8UsLrv6zdDxgHaLH?pid=ImgDet&w=474&h=711&rs=1",
    title:"item 2",
    description:"description of item 2"
  },
  {
    id:3,
    imageUrl:"https://th.bing.com/th/id/OIP.s1zJlyPO0ZXADUx9xAso0AHaE8?pid=ImgDet&w=474&h=316&rs=1",
    title:"item 3",
    description:"description of item 3"
  }
]



const Carousel = () => {
  const [currentItem , setCurrentItem]=useState(0)
  let  nextItem=()=>{
    console.log(currentItem)
   if(currentItem==items.length-1){
    setCurrentItem(0)
   }
   else{
    setCurrentItem((curr)=>curr+1)
   }
  }
  


  let  prevItem=()=>{
    
    console.log(currentItem)
   if(currentItem<=0){
    setCurrentItem(items.length-1)
   }else{
    setCurrentItem((curr)=>curr-1)
   }
  
  }

  useEffect(()=>{
    const timer=setInterval(() => {
      nextItem()
    }, 2000);

    return ()=>{
       clearInterval(timer)  // unmount function
    }
  },[currentItem])   // so automatically image will reset every 2 sec

  return (
   <div className='carousel'>
    <button onClick={prevItem}>
      prev
    </button>
    <div className='carousel-item'>
      <img height="200"
      width="200"
      src={items[currentItem]?.imageUrl}
      alt={items[currentItem]?.title}/>
      <h1>{items[currentItem]?.title}</h1>
      <p>{items[currentItem]?.description}</p>
    </div>
    <button onClick={nextItem}>Next</button>
   </div>
  )
}

export default Carousel