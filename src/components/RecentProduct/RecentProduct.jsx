import React, {useEffect, useState} from 'react';
import styles from './RecentProduct.module.css';
import axios from "axios";
import {Rating} from "@mui/material";
import {Link} from "react-router-dom";
import {RiseLoader} from "react-spinners";

const RecentProduct = () => {

    const [Products, setProducts] = useState([]);
    const [ISLoader, setISLoader] = useState(true);


    useEffect(() => {

        getProduct();
    }, []);



    function getProduct(){

        axios.get('https://ecommerce.routemisr.com/api/v1/products')
            .then(res => {
                setProducts(res.data.data);
                setISLoader(false);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }


    return (
        <>

            {ISLoader && <div className={`flex justify-center min-h-[75vh] items-center`}>
                <RiseLoader/>
            </div>}


            {!ISLoader && <div className={`row justify-center items-center`}>
                {Products.map(product =>

                    <div key={product.id} className={` sm:w-1/2 md:w-1/3  lg:w-1/5  pl-5 mb-5 `}>


                        <div className={`product hover:border-2 rounded-2xl overflow-hidden flex-wrap`}>

                            <Link to={`/productDetails/${product.id}/${product.category._id}`}>

                                <img src={product.imageCover}/>
                                <h2 className={`text-center text-2xl py-[2px] ${styles.font}`}>{product.title.split(" ").splice(0, 2).join(" ")}</h2>
                                <h2 className={`text-center py-[2px] ${styles.font}`}>{product.category?.name}</h2>

                                <div className={`flex justify-center items-center gap-2 py-[3px]`}>
                                    <Rating name="half-rating-read" defaultValue={product.ratingsAverage}
                                            precision={0.5} readOnly/>
                                    <span>{product.ratingsAverage}</span>
                                </div>

                                <h3 className={`text-center py-[3px]`}>{product.price} E£</h3>

                            </Link>


                            <div className={`btn flex  justify-around items-center gap-2 py-[5px]`}>

                                <button className={`${styles.btn} bg-slate-700 text-white`}><i
                                    className={`fa fa-cart-shopping`}></i> Add to cart
                                </button>
                                <button className={`${styles.btn} hover:bg-slate-700 border-2 hover:text-white `}><i
                                    className={`fa fa-regular fa-heart`}></i></button>

                            </div>


                        </div>


                    </div>
                )}
            </div>}
        </>
    );
};

export default RecentProduct;
