
import "../css/Demo1.css"
import axios from 'axios'
import { useEffect, useState } from "react"





function Demo1() {
  const [list, setList] = useState([])
  
  //获取列表
  const loadList = async () => {
    const res = await axios.get('http://localhost:3001/data1')

    setList(res.data);
    

  }
  useEffect(() => {
    loadList()

  }, [])
  
  // 删除
  const del = async (id) => {
    await axios.delete(`http://localhost:3001/data1/${id}`)
    loadList()
  }

  const search =  async () => {
    let c=document.getElementById('search-input').value;
    const res = await axios.get(`http://localhost:3001/data1/?q=${c}`)
    setList(res.data)
 
  }

 setInterval(function a(){
 
  if(document.getElementById('search-input').value == 0){
    
  }
  else{

  }
  
 },1000000
 )
  
  

 
  return (


<div id="all">
    <div id="search-all">
      <div id="search">
        <input id="search-input" type="text" placeholder="请输入关键词"   ></input>
        {/* <button id="search-clearbutton"  ></button> */}
        {/* style={{display:c?'block':'none'}}   */}


  <button id="search-button" type="button"  onClick={() => search()} >搜 索</button>
      </div>
    



<div id="table">
      <table border="1" >
        <thead>
          <tr>
            <th id="rwbh"><div className="th">任务编号</div></th>
            <th id="rwmc"><div className="th">任务名称</div></th>
            <th id="rwms"><div className="th">任务描述</div></th>
            <th id="cz"><div className="th">操作</div></th>
          </tr>
        </thead>
        <tbody>
          {list.map((a) => {
            return (
              <tr key={a.id}  >
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.des}</td>
                <td>    <a href="#"><button id="table-button" type="submit " onClick={() => del(a.id)}  >删除</button></a>    </td>

              </tr>
            );
          })}
        </tbody>

        
      </table></div>







    </div>
    </div>
    // console.log(res)

  )

}

export default Demo1
