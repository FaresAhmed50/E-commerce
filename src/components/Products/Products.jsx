import React from 'react';
import styles from './Products.module.css';
import RecentProduct from "../RecentProduct/RecentProduct.jsx";

const Products = () => {
    return (

        <div className={` w-[90%] mx-auto py-20`}>
            <RecentProduct/>
        </div>


    );
};

export default Products;
