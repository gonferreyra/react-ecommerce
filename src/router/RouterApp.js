import { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from '../helpers/ScrollToTop'
import Home from '../pages/Home'
import Cart from '../components/Cart/Cart'
import { UserContext } from '../components/Context/UserContext'
import Footer from '../components/Footer/Footer'
import Login from '../components/Login/Login'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import SneakerItem from '../components/SneakersSection/SneakerItem/SneakerItem'

const RouterApp = () => {

    const { isOpen, toggle } = useContext(UserContext)

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar isOpen={isOpen} toggle={toggle} />
            <Cart />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Home />} />
                <Route path='/product/:id' element={<SneakerItem />} />
                <Route path='/login' element={<Login />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RouterApp