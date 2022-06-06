
import '../css/headleft.css'
import '../css/Keyboard.css'

import { useEffect, useState, useRef } from "react"

function Keyboard() {
    let timer = null

    const [key, setKey] = useState([]);

    const ref = useRef(null)

    const [hit, setHit] = useState(0);

    const hitNumRef = useRef(null)

    const [countDownIntA, setCountDownIntA] = useState(0);

    const readyTimeRef = useRef(null)

    const countDownRef = useRef(null)

    const [countDownIntB, setCountDownIntB] = useState(10000);

    const [countDownLeft, setCountDownLeft] = useState(99);

    const [countDownRight, setCountDownRight] = useState(99);
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
    const aaa = (event) => {
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
        }
        else {
            setHit(0);
            hitNumRef.current.style.opacity = "0"
            hitNumRef.current.style.fontSize = "10px"
        }
    }
    // // 321倒计时倒到0调10秒钟的毫秒倒计时
    //     function readyTime() {

    //         if (readyTimeRef.current.innerHTML != 0) {
    //             console.log(readyTimeRef.current.innerHTML);
    //             setA(a => a - 1);
    //             console.log("动");
    //         }
    //         else {
    //             readyTimeRef.current.style.display = "none";
    //             countDownRef.current.style.display = "block";
    //            console.log("停");
    //            clearInterval(readyTime);
    //         }
    //     }
    useEffect(() => {
        if (countDownIntA === 3) { 
            timer = setInterval(() => setCountDownIntA(countDownIntA => --countDownIntA), 1000)
            
         }
        else if (countDownIntA === 0) {
            clearInterval(timer);
            console.log("fule ");
        }
    }, [countDownIntA])


    // // 点击事件调321倒计时
    const start = () => {
        readyTimeRef.current.style.opacity = "1";

        setCountDownIntA(3);
    }


    return (
        <div id='keyboardAll' tabIndex={0} onKeyDown={event => aaa(event)} ref={ref}>
            <div id='readyTime' ref={readyTimeRef} style={{ opacity: '0' }}>{countDownIntA}</div>
            <div id='countDown' ref={countDownRef} style={{ display: 'none' }}>{countDownLeft}:{countDownRight}</div>
            <button id='startButton' onClick={() => start()}>开始</button>
            <div id='hitNumFlex'>
                <div id='hitNum' ref={hitNumRef}>{hit}combo</div>
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