
import '../css/headleft.css'
import '../css/Keyboard.css'

import { useEffect, useState, useRef } from "react"

function Keyboard() {
    let timer = null;

    let timerB = null;


    const [key, setKey] = useState([]);

    const ref = useRef(null)

    const [hit, setHit] = useState(0);

    const hitNumRef = useRef(null)

    const [countDownIntA, setCountDownIntA] = useState();

    const readyTimeRef = useRef(null)

    const countDownRef = useRef(null)

    const countDownto3Ref = useRef(null)

    const countDownto2Ref = useRef(null)

    const [countDownIntB, setCountDownIntB] = useState(1);

    const [score, setScore] = useState(0);

    const scoreRef= useRef(null)
    useEffect(() => {
        ref.current.focus();
        let random = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
        let a = String.fromCharCode(random);
        setKey(a);
        console.log("hit" + hit);
        if (hit == 0) {
            hitNumRef.current.style.opacity = "0"
        }
    }, [])
    const typing = (event) => {
        let hitNumber = hitNumRef.current.style.fontSize.split('px')
        console.log(hitNumber);
        if (hitNumber[0] <= 110) {
            console.log(hitNumber[0]);
            hitNumRef.current.style.fontSize = 10 + hit * 5 + "px"
        }
        if (hit <= 10) {
            hitNumRef.current.style.color = "yellow"
        }
        if (hit > 9) {
            hitNumRef.current.style.color = "red"
        }
        if (event.key == key) {
            let random = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
            let a = String.fromCharCode(random);
            setKey(a);
            setHit(hit + 1); 
            hitNumRef.current.style.opacity = "1"
            setScore(score + 1);
        }
        else {
            console.log(event);
            setHit(0);
            hitNumRef.current.style.opacity = "0"
            hitNumRef.current.style.fontSize = "10px"
        }
    }
    useEffect(() => {
        if (countDownIntA === 3) {
            timer = setInterval(() => setCountDownIntA(countDownIntA => --countDownIntA), 1000)
        }
        else if (countDownIntA === 0) {
            clearInterval(timer);
            readyTimeRef.current.style.display = "none";
            countDownRef.current.style.display = "block";
            setCountDownIntB(6000)
        }
    }, [countDownIntA])


    useEffect(() => {
        if (countDownIntB === 6000) {
            setScore(0);
            scoreRef.current.style.opacity="1";
            setHit(0);
            hitNumRef.current.style.opacity="1";
            hitNumRef.current.style.fontSize = "10px"
            timerB = setInterval(() => setCountDownIntB(countDownIntB => --countDownIntB), 10)
        }
        else if (countDownIntB == 999) {
            countDownRef.current.style.display = "none";
            countDownto3Ref.current.style.display = "block";
        }
        else if (countDownIntB == 300) {
            countDownto3Ref.current.style.color = "red";
        }
        else if (countDownIntB == 99) {
            countDownto3Ref.current.style.display = "none";
            countDownto2Ref.current.style.color = "red";
            countDownto2Ref.current.style.display = "block";
        }
        else if (countDownIntB === 0) {
            // clearInterval(timerB);
            countDownto2Ref.current.style.display = "none";
            scoreRef.current.style.opacity = "0";
            hitNumRef.current.style.display = "none"
            setTimeout(function () {
                alert("挑战结束！！！  您的得分为" + `${score}` + "分")
            }, 500);
        }
    }, [countDownIntB])

    // // 点击事件调321倒计时
    const start = (event) => {
        readyTimeRef.current.style.opacity = "1";
        setCountDownIntA(3);
        event.target.style.opacity = "0"
        ref.current.focus();
    }



    return (
        <div id='keyboardAll' tabIndex={0} onKeyDown={event => typing(event)} ref={ref}>
            <span id='score' ref={scoreRef} style={{ opacity: '0' }}>得分：{score}</span>
            <div id='readyTime' ref={readyTimeRef} style={{ opacity: '0' }}>{countDownIntA}</div>
            <div id='countDown' ref={countDownRef} style={{ display: 'none' }}>{countDownIntB.toString().split("")[0]}{countDownIntB.toString().split("")[1]}:{countDownIntB.toString().split("")[2]}{countDownIntB.toString().split("")[3]}</div>
            <div id='countDownto3' ref={countDownto3Ref} style={{ display: 'none' }}>0{countDownIntB.toString().split("")[0]}:{countDownIntB.toString().split("")[1]}{countDownIntB.toString().split("")[2]}</div>
            <div id='countDownto2' ref={countDownto2Ref} style={{ display: 'none' }}>00:{countDownIntB.toString().split("")[0]}{countDownIntB.toString().split("")[1]}</div>
            <button id='startButton' onClick={event => start(event)}>开始</button>
            <div id='hitNumFlex'>
                <div id='hitNum'  ref={hitNumRef} style={{ opacity: '0' }}>{hit}combo</div>
            </div>
            <div id='keyboardall'>
                <div>
                    <div id='Q' className={key == 'q' ? 'keyboard one main' : 'keyboard one'}>Q</div>
                    <div id='W' className={key == 'w' ? 'keyboard two main' : 'keyboard two'}>W</div>
                    <div id='E' className={key == 'e' ? 'keyboard three main' : 'keyboard three'}>E</div>
                    <div id='R' className={key == 'r' ? 'keyboard four main' : 'keyboard four'}>R</div>
                    <div id='T' className={key == 't' ? 'keyboard five main' : 'keyboard five'}>T</div>
                    <div id='Y' className={key == 'y' ? 'keyboard five main' : 'keyboard five'}>Y</div>
                    <div id='U' className={key == 'u' ? 'keyboard four main' : 'keyboard four'}>U</div>
                    <div id='I' className={key == 'i' ? 'keyboard three main' : 'keyboard three'}>I</div>
                    <div id='O' className={key == 'o' ? 'keyboard two main' : 'keyboard two'}>O</div>
                    <div id='P' className={key == 'p' ? 'keyboard one main' : 'keyboard one'}>P</div>
                </div>
                <div id='secondRow'>
                    <div id='A' className={key == 'a' ? 'keyboard one main' : 'keyboard one'}>A</div>
                    <div id='S' className={key == 's' ? 'keyboard two main' : 'keyboard two'}>S</div>
                    <div id='D' className={key == 'd' ? 'keyboard three main' : 'keyboard three'}>D</div>
                    <div id='F' className={key == 'f' ? 'keyboard four main' : 'keyboard four'}>F</div>
                    <div id='G' className={key == 'g' ? 'keyboard five main' : 'keyboard five'}>G</div>
                    <div id='H' className={key == 'h' ? 'keyboard four main' : 'keyboard four'}>H</div>
                    <div id='J' className={key == 'j' ? 'keyboard three main' : 'keyboard three'}>J</div>
                    <div id='K' className={key == 'k' ? 'keyboard two main' : 'keyboard two'}>K</div>
                    <div id='L' className={key == 'l' ? 'keyboard one main' : 'keyboard one'}>L</div>
                </div>
                <div id='thirdRow'>
                    <div id='Z' className={key == 'z' ? 'keyboard one main' : 'keyboard one'}>Z</div>
                    <div id='X' className={key == 'x' ? 'keyboard two main' : 'keyboard two'}>X</div>
                    <div id='C' className={key == 'c' ? 'keyboard three main' : 'keyboard three'}>C</div>
                    <div id='V' className={key == 'v' ? 'keyboard four main' : 'keyboard four'}>V</div>
                    <div id='B' className={key == 'b' ? 'keyboard three main' : 'keyboard three'}>B</div>
                    <div id='N' className={key == 'n' ? 'keyboard two main' : 'keyboard two'}>N</div>
                    <div id='M' className={key == 'm' ? 'keyboard one main' : 'keyboard one'}>M</div>
                </div>
            </div>
        </div>
    )
}
export default Keyboard