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



    return(






<div id="left">
<h3 id='left1'>函数组件</h3>
        <ul>
            <li><button className='leftbutton'  onClick={()=>toDemo1()}  >demo1</button></li>
            
            <li><button  className='leftbutton' onClick={()=>toDemo2()}  >demo2</button></li>
           
        </ul>

</div> 








    )
}
export default Left