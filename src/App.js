import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Head from './componentEveryOne/Head';
import Left from './componentEveryOne/Left';

import Login from './component/Login';
import Main from './component/Main';
import New from './component/New';
import Demo1 from './component/Demo1';
import Jieshou from './component/Jieshou';
import Modal from './component/Modal';
import Check from './component/Check';
import Fatherandchild from './component/Fatherandchild';
import Context from './component/Context';
import Keyboard from './component/Keyboard';
function App() {
    return (

        
            <BrowserRouter>
                <Head />
                <Left />
                <Routes>

                    {/* <Route path='/jieshou' component={<Jieshou />} /> */}
                    <Route path='/' element={<Keyboard />} />
                    <Route path='/demo1' element={<Demo1 />} />
                    <Route path='*' element={<Jieshou />} />
                    <Route path='/modal' element={<Modal />} />
                    <Route path='/main' element={<Main />} />
                    <Route path='/head' element={<Head />} />
                    <Route path='/new' element={<New />} />
                    <Route path='/left' element={<Left />} />
                    <Route path='/Check' element={<Check />} />
                    <Route path='/Fatherandchild' element={<Fatherandchild />} />
                    <Route path='/Context' element={<Context />} />
                    <Route path='/Login' element={<Login />} />

                </Routes>
            </BrowserRouter>
         
    )
}

export default App
