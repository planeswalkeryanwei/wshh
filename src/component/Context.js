import { useState, createContext, useContext } from 'react'
import '../css/headleft.css'
const NumContext = createContext();
//子组件
function Child() {
    const { num, setNum } = useContext(NumContext)
    return (
        <>
            <h2>{num}</h2>
            <button onClick={() => { setNum(456) }}>修改num</button>
        </>
    )
}
//父组件
function Father() {

    return (

        <Child />

    )
}
//爷爷组件
function Context() {
    const [num, setNum] = useState()
    return (
        <div id='formall'>
            <NumContext.Provider value={{ num, setNum }}>
                <Father />
            </NumContext.Provider>
        </div>
    )
}
export default Context