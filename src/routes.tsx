import {Routes, Route } from 'react-router-dom';
import { AppContext } from './componnets/AppContext';
import { useContext } from 'react';
import Conta from './pages/Conta';
import Home from './pages/Home';

const MainRoutes = () => {

    const { isLoggedIn } = useContext(AppContext)
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/conta' element={isLoggedIn ? <Conta/> : <Home/>} />
            <Route path='/conta/:id' element={isLoggedIn ? <Conta/> : <Home/>} />
        </Routes>
    )
}

export default MainRoutes;