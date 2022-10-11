import { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import Cart from '../Cart/Cart'
import { UserContext } from '../Context/UserContext'
import Login from '../Login/Login'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'

const RouterApp = () => {

    const { isOpen, toggle } = useContext(UserContext)

    return (
        <BrowserRouter>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar isOpen={isOpen} toggle={toggle} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path='/cart' element={<Cart />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterApp