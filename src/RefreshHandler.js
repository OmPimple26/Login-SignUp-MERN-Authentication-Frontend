// rafce - React Arrow Function Component Export
// anfn - React Arrow Function No Export

import React from 'react'
import { replace, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// import Home from './pages/Home';

const RefreshHandler = ({setisAuthenticated}) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("token")){
            setisAuthenticated(true);
            if(location.pathname === '/' ||
               location.pathname === '/login' ||
               location.pathname === '/signup'
            ) {
                navigate('/home', {replace: false});
            }
        }
    }, [location, navigate, setisAuthenticated]);
    
    return (
        null
    )
}

export default RefreshHandler