import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/reducer/userSlice'

const Logout = () => {

    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    };

    return (
        <div>
            <button className="logout_button" onClick={(e) => handleLogout(e)}>Logout</button>
        </div>
    );
};

export default Logout;