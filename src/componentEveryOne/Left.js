import '../css/headleft.css'
import { useNavigate } from 'react-router-dom'





function Left() {
    
    const navigate = useNavigate();

    const toDemo1 = ()=> {
        
        navigate('/Demo1');
    }

    const toDemo2 = ()=> {
        
        navigate('/Main');
    }
    const toFatherandchild = ()=> {
        
        navigate('/Fatherandchild');
    }
    const toJieshou = ()=> {
        
        navigate('/Jieshou');
    }
    const toContext = ()=> {
        
        navigate('/Context');
    }
    const toKeyboard = ()=> {
        
        navigate('/Keyboard');
    }
    return(






<div id="left">
<h3 id='left1'>函数组件</h3>
        <ul>
            <li><button className='leftbutton'  onClick={()=>toDemo1()}  >demo1</button></li>
            
            <li><button  className='leftbutton' onClick={()=>toDemo2()}  >表格</button></li>
           
            <li><button  className='leftbutton' onClick={()=>toFatherandchild()}  >父子</button></li>

            <li><button  className='leftbutton' onClick={()=>toJieshou()}  >404与ref</button></li>

            <li><button  className='leftbutton' onClick={()=>toContext()}  >Context</button></li>

            <li><button  className='leftbutton' onClick={()=>toKeyboard()}  >键盘</button></li>
        </ul>

</div> 








    )
}
export default Left