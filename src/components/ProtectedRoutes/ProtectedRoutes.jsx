import React from 'react';
import styles from './ProtectedRoutes.module.css';
import {Navigate} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRoutes = ({children}) => {

    if (localStorage.getItem('token')) {

        return children;

    }else {
        return <Navigate to={'/login'}/>
    }

};

export default ProtectedRoutes;
