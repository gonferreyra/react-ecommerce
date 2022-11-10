import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = ({ isLoggedIn }) => {
    // console.log(isLoggedIn)
    return (
        isLoggedIn ? <Outlet /> : <Navigate to='/login' />)
};

export default PrivateRoute;