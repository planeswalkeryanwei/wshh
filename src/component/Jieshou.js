
import React from 'react'
import '../css/Cool.css'
import {useRef} from "react";




function Jieshou() {
  const ref =useRef(null)
 function cancanneed(){
   console.log(ref.current.innerHTML = "看看你的！！！");
 }
  return (

<h1 id='formall' ref={ref}>折返吧
<button onClick={()=>cancanneed()}>看看你的</button>
</h1>
  


  )
}

export default Jieshou
