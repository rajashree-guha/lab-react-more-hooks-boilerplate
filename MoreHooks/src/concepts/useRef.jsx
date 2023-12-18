import React, { useRef,useEffect, useState } from 'react'

const UseRef = () => {
  
 let [count1,setCount]=useState(0)

 let count =useRef(0)

 let input =useRef(null)

 useEffect(()=>{
    // setCount(count+1)
    count.current =count.current+1
 },[])

 const InputSubmit=()=>{
   console.log(" input.current:", input.current);
//    input.current.style.background="red"
//    input.current.focus()
 }

  return (
    <div>
        <input type="text" ref={input}/>
        <button onClick={InputSubmit}>Submit</button>
        <h2>No of re-renders:{count.current}</h2>
        <button onClick={()=>{
            setCount(count1+1)
        }}>Change state</button>
    </div>
  )
}

export default useRef


//create a var and won't re-render the component --> useRef