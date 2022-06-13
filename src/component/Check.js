import '../css/Check.css'
import { useEffect, useState } from "react"


function Check() {
    const [faildOrNot, setFaildOrNot] = useState(1)
    var moveDistance = 0;
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
                            
                            document.getElementById("checkAll").style.opacity = "0"
                            e.target.style.left = "0px";
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
            // 拖尾长度修改
            let newCheckButtonWidth = (e.nativeEvent.offsetX) + "px";
            e.target.style.width = newCheckButtonWidth;
            //往左移动
            checkButton.style.left = (e.nativeEvent.offsetX) + "px"
            // 往右的偏移长度也要减
            // moveDistance = moveDistance - goLeft;
            console.log("checkButtonWidth"+checkButtonWidth);
            console.log("偏移长度" + moveDistance);
        }
    }





    return (

        <div id='check' >
            <div id='checkAll'>
                <div id='checkButtonUnder' onMouseMove={event => { move(event) }} >
                </div>
                <div id='placeholder' style={{ display:faildOrNot == 0 ? "block":"none"}}>
                    验证失败
                </div>
                <span id='checkButton' onMouseDown={event => { down(event) }}>
                    &gt; &gt;
                </span>
            </div>
        </div>
    )
}

export default Check