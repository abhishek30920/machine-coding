import React, { useEffect, useState } from 'react'

const StopWatch = () => {
  const [time,setTime]=useState(5100)
  const [isactive,setActive]=useState(false)

  useEffect(()=>{
    let interval;
    if(isactive){
      interval=setInterval(()=>{
        setTime((time)=>{
          if(time>0){
            return time-1
          }else{
            setActive(false)
            return 0
          }
        })
      },1000)
    }
    return ()=>{
      clearInterval(interval)
    }
  },[isactive])

const handleStart=()=>{
  setActive(true)
}

const handleResume=()=>{
 setActive((prev)=>!prev)
}

const handleStop=()=>{
  setActive(false)
  setTime(0)
}

const formatTime=(time)=>{
  const hours= Math.floor(time/3600).toString().padStart(2,'0') // seconds to hours
  const minutes=Math.floor((time % 3600)/60).toString().padStart(2,'0') 
  const seconds=(time %60).toString().padStart(2,'0') 
  return `${hours}:${minutes}:${seconds}`
}

  return (
<>
  <h1>StopWatch</h1>
  <p>{formatTime(time)}</p>
  <button onClick={handleStart}>Start</button>
  <button onClick={handleResume}>pause/resume</button>
 
  <button onClick={handleStop}>Stop</button>
</>
  )
}

export default StopWatch