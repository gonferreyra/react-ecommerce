import { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from '../../helpers/ScrollToTop'
import Home from '../../pages/Home'
import Cart from '../Cart/Cart'
import { UserContext } from '../Context/UserContext'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import SneakerItem from '../SneakersSection/SneakerItem/SneakerItem'

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
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RouterApp