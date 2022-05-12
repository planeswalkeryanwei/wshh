import { useState } from 'react'
import '../css/headleft.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import { Checkbox } from 'antd'


function New() {
    const navigate = useNavigate();

    const [name, setName] = useState([])

    const [phone, setPhone] = useState([])

    const [old, setOld] = useState([])

    const [sex, setSex] = useState([])
    
    const [oname, setOname] = useState([])

 
    const add = async() => {

        if (name == ''||phone == ''||old == ''||sex == ''||oname == '') {
            alert("请将信息添加完整！");
        } else {
            axios.post("http://localhost:3001/user", {
            uname: name,
            uphone: phone,
            uold: old,
            usex: sex,
            uoname: oname         
        })
        alert("添加完成");
        navigate('/Main');
        }
        
    }
    function toMain(){
        navigate('/Main');
    }
    function re(){
        window.location.reload();
    }
    // function getMousePos(event) {
    //     var e = event || window.event;
    //     return {'x':e.clientX,'y':clientY}
    // }   
    return (
        <div id='formall'>
                <button id="returnButton" name="uphone" type="submit" value="Submit" onClick={()=>toMain()}>返回</button >
          
                <div className=" addAll">
                    <div className="addName">姓名:</div>
                    <input className="add" id='addFirst' type="text" name="uname" placeholder="请输入真实姓名" onChange={ event => { setName(event.target.value);} }></input>
                </div>
                    <div style={{color:'red',float:'left',opacity: name.length >4 ? "1":"0"}}>真实姓名应为四字之内</div>



                <div className=" addAll">
                    <div className="addName">电话:</div>
                    <input className="add" type="text" name="uphone" placeholder="请输入手机号" onChange={event => {setPhone(event.target.value)}}></input>
                </div>
                    <div>
                        <div style={{color:'red',float:'left',opacity: phone.length == 11|| phone.length==0  ? "0":"1"}}>手机号码应为11位</div>
                        <div style={{color:'red',float:'left',paddingLeft:'20px',opacity: phone[0]==1|| phone.length==0  ? "0":"1"}}>手机号码应为1开头</div>
                    </div>



                <div className=" addAll">
                    <div className="addName">年龄:</div>
                    <input className="add" type="text" name="uold" age="age" placeholder="请输入年龄" onChange={event => {setOld(event.target.value)}}></input>
                </div>
                    <div style={{color:'red',float:'left',opacity: old.length >2 ? "1":"0"}}>年龄到达100或以上恕不接待</div>
                


                <div className=" addAll">
                    <div className="addName">性别:</div>
                    <input className="add" type="text" name="usex" placeholder="请输入性别" onChange={event => {setSex(event.target.value)}}></input>
                </div>
                    <div style={{color:'red',float:'left',opacity: sex=='男'||sex=='女'||sex=='' ? "0":"1"}}>性别应为男或女</div>



                <div className=" addAll">
                    <div className="addName">部门:</div>
                    <input className="add" type="text" name="uoname" placeholder="请输入部门" onChange={event => {setOname(event.target.value)}}></input>
                </div>
                    <div style={{color:'red',float:'left',opacity: oname=='采购部'||oname=='研发部'||oname=='行政部'||oname=='' ? "0":"1"}}>采购部 研发部 或 行政部</div>


            <div>
                <button id="addButton" name="uphone" type="submit" value="Submit" onClick={()=>re()}>重置</button >
                <button id="addButton" name="uphone" type="submit" value="Submit" onClick={()=>add()}>新增</button >
            </div>
            
           
        </div>
    )
}
export default New