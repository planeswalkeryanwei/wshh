import '../css/Check.css'
import { useEffect, useState } from "react"


function Check() {
    const [faildOrNot, setFaildOrNot] = useState(1)
    var moveDistance = 0;
    function down(e) {
        var checkButtonUnder = document.getElementById("checkButtonUnder");
        // e.target.style.left = "0px";
        // checkButtonUnder.style.width = "21px";
        // e.target.onmousedown = null;
        // e.target.onmousemove = null;
        // checkButtonUnder.innerHTML = ""
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
                    checkButtonUnder.innerHTML = "验证成功！！！"
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
            var checkButton = document.getElementById("checkButton");
            //拖尾长度带px
            var checkButtonWidth = e.target.style.width.split("px")[0];
            // 要往左多少
            var goLeft = checkButtonWidth - e.nativeEvent.offsetX;
            // left在哪 数字
            var left = checkButton.style.left.split("px")[0];
            // 自身长度
            var newCheckButtonWidth = (checkButtonWidth - goLeft) + "px";
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