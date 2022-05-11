
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../css/headleft.css'
import { useEffect, useState } from "react"


function Login() {
    const navigate = useNavigate();
    // 重置 
    const re = () => {

        document.getElementById('input-user').value = "";
        document.getElementById('input-password').value = "";

    }
    // 登录
    const uselogin = async () => {


        if (document.getElementById('input-user').value != "" && document.getElementById('input-password').value != "") {
            let checkpw = /^(?![^\da-zA-Z]+$).{6,12}$/;
            if (checkpw.test(document.getElementById('input-password').value)) {
                let input = document.getElementById('input-user').value;
                const res = await axios.get(`http://localhost:3001/data/?dname=${input}`)
                console.log(res.data);
                if (res.data != "") {
                    let password = document.getElementById('input-password').value;
                    if (document.getElementById('input-user').value == res.data[0].dname && document.getElementById('input-password').value == res.data[0].dpassword) {
                        alert("欢迎" + res.data[0].dname + "登录");
                        navigate('/main')
                    }
                    else {
                        alert("账号或密码错误");
                    }
                }
                else {
                    alert("此用户未注册");
                }
            }
            else {
                alert("请输入6-12位字母数字组成的密码");
                document.getElementById('input-password').value = "";
            }

        }
        else {
            alert("请将登录信息补全");
        }
    }
    document.onmousemove = function () {
        console.log('onmousemove');
    };
    document.onmousedown = function () {
        console.log('mousedown');
    };
    document.onmouseup = function () {
        console.log('onmouseup');
    }

    return (

        <div id='login' >

            <div id='loginlocal'>
                <div className='dengluInput'>用户名：  <input id="input-user" type="text" placeholder="请输入用户名"   ></input></div>

                <div className='dengluInput'>  密码：   <input id="input-password" type="password" placeholder="请输入6-12位字母数字组成的密码"   ></input></div>
                    <div>
                        <button className='loginbutton' onClick={() => re()}>重置</button>
                        <button className='loginbutton' id='loginbutton2' onClick={() => uselogin()}>登录</button>
                       <input id="input-user" type="range" placeholder="请输入用户名"   ></input>
                    </div>
                </div>

        </div>
    )
}

export default Login