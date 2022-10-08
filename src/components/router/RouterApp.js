import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import Login from '../Login/Login'

const RouterApp = () => {



    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterApp