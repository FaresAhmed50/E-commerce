import React, {useEffect, useState} from 'react';
import styles from './Home.module.css';

import RecentProduct from "../RecentProduct/RecentProduct.jsx";

const Home = () => {




    useEffect(() => {
    }, []);




    return (

        <>
            <div className={` w-[90%] mx-auto py-20`}>
                <RecentProduct/>
            </div>
        </>

    );
};

export default Home;
