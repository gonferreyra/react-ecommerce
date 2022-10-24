import { useContext, useEffect, useState } from 'react'
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
import Register from '../components/Login/Register/Register'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase-config"
import { useDispatch } from 'react-redux'
import { login, loginGoogle } from '../redux/Auth/auth-actions'
import { useNavigate } from 'react-router-dom';


const RouterApp = () => {

    const { isOpen, toggle } = useContext(UserContext)

    const dispatch = useDispatch();

    // const navigate = useNavigate()

    // Check if user is authenticated or not
    const [check, setCheck] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Keep state of user authenticated on reload. user? check if user has something, then look for user.uid
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {

            if (user?.photoURL) {
                dispatch(loginGoogle(user.uid, user.displayName, user.photoURL))
                setIsLoggedIn(true)
            } else if (user?.uid && !user.photo) {
                dispatch(login(user.uid, user.displayName))
                setIsLoggedIn(true)
            } else {
                setIsLoggedIn(false)
            }
            setCheck(false)
        })
    }, [dispatch, setCheck, setIsLoggedIn])


    // See what we can add - Spinner???
    if (check) {
        return (
            <h1>Wait..</h1>
        )
    }

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Sidebar isOpen={isOpen} toggle={toggle} isLoggedIn={isLoggedIn} />
            <Navbar isOpen={isOpen} toggle={toggle} isLoggedIn={isLoggedIn} />
            <Cart isLoggedIn={isLoggedIn} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Home />} />
                <Route path='/product/:id' element={<SneakerItem />} />
                <Route path='/register' element={<Register />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RouterApp