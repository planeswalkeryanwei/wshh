
import '../css/headleft.css'
import '../css/Keyboard.css'

import { useEffect, useState,useRef } from "react"

function Keyboard() {  
    const [key,setKey]=useState([]);
    useEffect(()=>{
       let random= Math.floor(Math.random() * (122 - 97 + 1) ) + 97;
       let a=String.fromCharCode(random);
       setKey(a);
       console.log(key);
    },[])
const aaa=(event)=>{
  if(event.key==key){
      let random= Math.floor(Math.random() * (122 - 97 + 1) ) + 97;
       let a=String.fromCharCode(random);
       setKey(a);
  }
}
    return (
        <div id='keyboardAll'tabIndex={0} onKeyDown={event=>aaa(event)} >
            <div id='keyboardall'>  
                <div>
                    <div id='Q' className={ key=='q' ? 'keyboard one main' : 'keyboard one' }>Q</div>
                    <div id='W' className={ key=='w' ? 'keyboard two main' : 'keyboard two' }>W</div>
                    <div id='E' className={ key=='e' ? 'keyboard three main' : 'keyboard three' }>E</div>
                    <div id='R' className={ key=='r' ? 'keyboard four main' : 'keyboard four' }>R</div>
                    <div id='T' className={ key=='t' ? 'keyboard five main' : 'keyboard five' }>T</div>
                    <div id='Y' className={ key=='y' ? 'keyboard five main' : 'keyboard five' }>Y</div>
                    <div id='U' className={ key=='u' ? 'keyboard four main' : 'keyboard four' }>U</div>
                    <div id='I' className={ key=='i' ? 'keyboard three main' : 'keyboard three' }>I</div>
                    <div id='O' className={ key=='o' ? 'keyboard two main' : 'keyboard two' }>O</div>
                    <div id='P' className={ key=='p' ? 'keyboard one main' : 'keyboard one' }>P</div>
                </div>
                <div id='secondRow'>
                    <div id='A' className={ key=='a' ? 'keyboard one main' : 'keyboard one' }>A</div>
                    <div id='S' className={ key=='s' ? 'keyboard two main' : 'keyboard two' }>S</div>
                    <div id='D' className={ key=='d' ? 'keyboard three main' : 'keyboard three' }>D</div>
                    <div id='F' className={ key=='f' ? 'keyboard four main' : 'keyboard four' }>F</div>
                    <div id='G' className={ key=='g' ? 'keyboard five main' : 'keyboard five' }>G</div>
                    <div id='H' className={ key=='h' ? 'keyboard four main' : 'keyboard four' }>H</div>
                    <div id='J' className={ key=='j' ? 'keyboard three main' : 'keyboard three' }>J</div>
                    <div id='K' className={ key=='k' ? 'keyboard two main' : 'keyboard two' }>K</div>
                    <div id='L' className={ key=='l' ? 'keyboard one main' : 'keyboard one' }>L</div>
                </div>
                <div id='thirdRow'>
                    <div id='Z' className={ key=='z' ? 'keyboard one main' : 'keyboard one' }>Z</div>
                    <div id='X' className={ key=='x' ? 'keyboard two main' : 'keyboard two' }>X</div>
                    <div id='C' className={ key=='c' ? 'keyboard three main' : 'keyboard three' }>C</div>
                    <div id='V' className={ key=='v' ? 'keyboard four main' : 'keyboard four' }>V</div>
                    <div id='B' className={ key=='b' ? 'keyboard three main' : 'keyboard three' }>B</div>
                    <div id='N' className={ key=='n' ? 'keyboard two main' : 'keyboard two' }>N</div>
                    <div id='M' className={ key=='m' ? 'keyboard one main' : 'keyboard one' }>M</div>
                </div>
                </div>
        </div>
    )

}
export default Keyboard