import React from 'react';
import styles from './Layout.module.css';
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Navbar/>


                <Outlet/>


            <Footer/>
        </div>
    );
};

export default Layout;
