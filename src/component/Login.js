
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../css/headleft.css'
import '../css/Check.css'
import { useEffect, useState } from "react"

function Login() {
    const navigate = useNavigate();
    const [username, setUserName] = useState("")
    const [userpw, setUserPw] = useState("")
    const [checkOrNot, setCheckOrNot] = useState(0)
    const [checkOkOrNot, setCheckOkOrNot] = useState(0)
    // 重置 
    const re = () => {
        setUserName('');
        setUserPw('');
console.log(username);
    }
    // 登录
    const uselogin = async () => {

        if (username != "" && userpw != "") {
            let checkpw = /^(?![^\da-zA-Z]+$).{6,12}$/;
            if (checkpw.test(userpw)) {
                const res = await axios.get(`http://localhost:3001/data/?dname=${username}`)
                console.log(res.data);
                if (res.data != "") {
                    if (username == res.data[0].dname && userpw == res.data[0].dpassword) {
                        if (checkOkOrNot == 0 || checkOkOrNot == 2) {
                            alert("欢迎" + res.data[0].dname + "登录");
                            navigate('/main')
                        }
                        else{
                            alert("请滑动滑块完成验证,并等待其完成！");
                        }
                    }
                    else {
                        alert("账号或密码错误");
                        setCheckOrNot(checkOrNot + 1);
                        console.log(checkOrNot);
                        if (checkOrNot >= 2) {
                            setCheckOkOrNot(1);
                        }
                        // setCheckOrNot(parseInt(checkOrNot)+1);
                        console.log(checkOrNot);
                    }
                }
                else {
                    alert("此用户未注册");
                }
            }
            else {
                alert("请输入6-12位字母数字组成的密码");
                setUserPw('');
            }

        }
        else {
            alert("请将登录信息补全");
        }
    }

    const [faildOrNot, setFaildOrNot] = useState(1)
    let moveDistance = 0;
    function down(e) {
        let checkButtonUnder = document.getElementById("checkButtonUnder");
        e.target.onmousemove = (MouseEvent) => {
            setFaildOrNot(1);
            console.log(faildOrNot);
            if (MouseEvent.offsetX > 0) {
                moveDistance += MouseEvent.offsetX;
                e.target.style.left = moveDistance + "px";
                checkButtonUnder.style.width = moveDistance + "px";
                if (moveDistance >= 259) {
                    e.target.onmousedown = null;
                    e.target.onmousemove = null;
                    checkButtonUnder.innerHTML = "<div id='loading'></div>验证成功,请稍等！！！"
                    let random2to5 = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
                    let random2to5Ms = random2to5 + "000";
                    console.log(random2to5Ms);
                    setTimeout(function () {
                        checkButtonUnder.innerHTML = "加载完成"
                        setTimeout(function () {
                            setCheckOrNot(0);
                            setCheckOkOrNot(2);
                            document.getElementById("checkAll").style.opacity = "0"
                            e.target.style.left =  "0px";
                            checkButtonUnder.style.width = "0px";
                            checkButtonUnder.innerHTML = ""
                        }, 500);
                    }, random2to5Ms);

                }
                e.target.onmouseup = () => {
                    if (moveDistance >= 259) {
                        e.target.onmousemove = null;
                    } else {
                        e.target.style.left = "0px";
                        checkButtonUnder.style.width = "21px"
                        moveDistance = 0;
                        e.target.onmousemove = null;
                        setFaildOrNot(0);
                        console.log(faildOrNot);
                    }
                }
            }
        }
    }
    //  往回走
    function move(e) {
        // 停止
        if (moveDistance >= 259) {
            e.target.onmousemove = null;
        }
        else {
            let checkButton = document.getElementById("checkButton");
            //拖尾长度带px
            let checkButtonWidth = e.target.style.width.split("px")[0];
            // 要往左多少
            let goLeft = checkButtonWidth - e.nativeEvent.offsetX;
            // left在哪 数字
            let left = checkButton.style.left.split("px")[0];
            // 自身长度
            let newCheckButtonWidth = (checkButtonWidth - goLeft) + "px";
            e.target.style.width = newCheckButtonWidth;
            // 往右的偏移长度也要减
            moveDistance = moveDistance - goLeft;
            //往左移动
            console.log(goLeft);
            console.log(left);
            console.log("偏移长度" + moveDistance);
            checkButton.style.left = (left - goLeft) + "px"
        }
    }








    return (

        <div id='login' >

            <div id='loginlocal'>
                <div className='dengluInput'>用户名：  <input id="input-user" type="text" placeholder="请输入用户名" value={username} onChange={event => {
                    setUserName(event.target.value);
                    console.log(username)
                }} ></input></div>

                <div className='dengluInput'>  密码：   <input id="input-password" type="password" placeholder="请输入6-12位字母数字组成的密码" value={userpw} onChange={event => {
                    console.log(userpw)
                    setUserPw(event.target.value)
                }} ></input>
                </div>


                <div id='checkAll' style={{ opacity: checkOrNot >= 3 && checkOrNot != 0 ? "1" : "0" }}>
                    <div id='checkButtonUnder' onMouseMove={event => { move(event) }} >

                    </div>
                    <div id='placeholder' style={{ display: faildOrNot == 0 ? "block" : "none" }}>
                        验证失败
                    </div>
                    <span id='checkButton' onMouseDown={event => { down(event) }}>
                        &gt; &gt;
                    </span>
                </div>


                <div>
                    <button className='loginbutton' onClick={() => re()}>重置</button>
                    <button className='loginbutton' id='loginbutton2' onClick={() => uselogin()}>登录</button>
                </div>
            </div>

        </div>
    )
}

export default Login