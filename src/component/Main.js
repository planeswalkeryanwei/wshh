import axios from 'axios'
import { useEffect, useState } from "react"
import React from 'react'
import Modal from '../component/Modal';
import '../css/headleft.css'
// import React, { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useNavigate } from 'react-router-dom'






function Main() {

  const navigate = useNavigate();

  const [data, setData] = useState([])

  const [item, setItem] = useState({})

  const [oname1, setOname1] = useState({})

  const [oname2, setOname2] = useState({})

  const [oname3, setOname3] = useState({})

  const [oname4, setOname4] = useState({})
  
  //获取列表
  const loadData = async () => {
    const res = await axios.get('http://localhost:3001/user')
    setData(res.data);
  }
  useEffect(() => {
    loadData()
  }, [])



  // 删除
  const del = async (id) => {
    await axios.delete(`http://localhost:3001/user/${id}`)
    loadData()
  }

  console.log(data);



  // 模态框引用
  const [modalVisible, setModalVisible] = useState(false);
  const modalConfig = {
    visible: modalVisible,
    closeModal: () => {
      setModalVisible(false);
    }
  };

  const modalChildren = (
    <div className="dialog">
      <span onClick={() => setModalVisible(false)} className="closeBtn">x</span>
      <div id="row">
      <div className="th">{item.uname}</div>
      </div>
    </div>
  );




  // const xiangqing = (a, b, c, d, e) => {
  //   var xiangqing = a + " - " + b + " - " + c + " - " + d + " - " + e;
  //   alert(xiangqing);
  //   return xiangqing;

  // }
  

  const newone = () => {
    navigate('/New');
  }
  


  var a="采购部";
  var b="研发部";
  var c="行政部";
  const OnCheckBox4=async(a,b,c)=> {
    
    const res = await axios.get(`http://localhost:3001/user/?uoname=${a}&uoname=${b}&uoname=${c}`)
    setData(res.data)
   
  }

  function con() {
    
   console.log(oname1);
   
  }







  return (
    <div id='mainall'>

<div> <label><button className='inputbutton' id='Addbutton' onClick={()=>newone() } >新增</button></label>
<label><button className='inputbutton' style={{ backgroundColor:oname1==1 ? "red":"rgb(24, 144, 255)"}} onClick={()=>{{OnCheckBox4(a)};setOname1(1);setOname2(0);setOname3(0);setOname4(0);}}>采购部</button></label>
      <label><button className='inputbutton' style={{ backgroundColor:oname2==1 ? "red":"rgb(24, 144, 255)"}}onClick={()=>{{OnCheckBox4(b)};setOname1(0);setOname2(1);setOname3(0);setOname4(0);}} >研发部</button></label>
      <label><button className='inputbutton' style={{ backgroundColor:oname3==1 ? "red":"rgb(24, 144, 255)"}} onClick={()=>{{OnCheckBox4(c)};setOname1(0);setOname2(0);setOname3(1);setOname4(0);}} >行政部</button></label>
      <label><button className='inputbutton' style={{ backgroundColor:oname4==1 ? "red":"rgb(24, 144, 255)"}} onClick={()=>{{OnCheckBox4(a,b,c)};setOname1(0);setOname2(0);setOname3(0);setOname4(1);}} >全部</button></label></div>
     

      <table border="1" id='table'>
        <thead>
          <tr>
            <th id="yhm"><div className="th">用户名</div></th>
            <th id="dh"><div className="th">电话</div></th>
            <th id="nl"><div className="th">年龄</div></th>
            <th id="xb"><div className="th">性别</div></th>
            <th id="ssbm"><div className="th">所属部门</div></th>
            <th id="cz"><div className="th">操作</div></th>
          </tr>
        </thead>

        <tbody>
          {data.map((a) => {
            return (
              <tr key={a.id}  >

                <td>{a.uname}</td>
                <td>{a.uphone}</td>
                <td>{a.uold}</td>
                <td>{a.usex}</td>
                <td>{a.uoname}</td>
                <td>
                  <a href="#"><button id='table-button' className="table-button" type="submit " onClick={() => del(a.id)} >删除</button></a>

                  <a><button id='table-button2' className="table-button" type="primary" onClick={() => {setModalVisible(true); setItem(a)}}        >  详情</button></a>

            
                </td>

              </tr>
            );
          })}
        </tbody>
       

<Modal {...modalConfig}>{modalChildren}</Modal>


      </table>





      {/* 引模态框 */}
   








    </div>
  )
}

export default Main