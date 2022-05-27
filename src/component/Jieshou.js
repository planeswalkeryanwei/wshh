
import React from 'react'
import '../css/Cool.css'
import { useRef } from "react";
import { useNavigate } from 'react-router-dom'





function Jieshou() {
  const ref = useRef(null)

  const navigate = useNavigate();

  const outLogin = () => {

    navigate('/');
  }
  function cancanneed() {
    console.log(ref.current.innerHTML = "看看你的！！！");
  }
  return (
    <div id='formall' >
      <div style={{ fontSize: "500px" }}>404</div>
      <h1 ref={ref} onClick={() => outLogin()}>折返吧</h1>
      <button onClick={() => cancanneed()}>看看你的</button></div>



  )
}

export default Jieshou
