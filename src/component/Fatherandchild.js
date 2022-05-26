import { useState } from 'react'
import '../css/headleft.css'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
// import { Checkbox } from 'antd'
//子组件
function Child(props) {
 
    return (
       <div>
       <h1>父传子{props.numFather} </h1>
       <button onClick={()=>{props.babafangfa(123)}}>子传父 </button>
       </div> 
    )
}
//父组件
function Father(props) {
 
    return (
       <div>
       <Child numFather={props.numFatherandchild} babafangfa={props.yeyefangfa}/>
       </div> 
    )
}
//爷爷组件
function Fatherandchild() {
 const [sontofather,SetSontofather]=useState()
    return (
      <div id='formall'>
          <Father numFatherandchild={'111'} yeyefangfa={SetSontofather}/>
          {sontofather}
      </div>
    )
}
export default Fatherandchild