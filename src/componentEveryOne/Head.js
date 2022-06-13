import '../css/headleft.css'
import { useNavigate } from 'react-router-dom'





function Head() {
    
    const navigate = useNavigate();


    const gotoHome = ()=> {
        
        navigate('/Demo1');
    }

    const outLogin = ()=> {
        
        navigate('/Login');
    }


    return(
<div id="head" >
<h1 id='headTitle' onClick={()=>gotoHome()}>实习项目</h1>
<button id="outLoginButton" name="uphone" type="submit" value="Submit" onClick={()=>outLogin()}>注销</button >

</div>



    )
}
export default Head