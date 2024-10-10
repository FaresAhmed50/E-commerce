import React, {useEffect, useState} from 'react';
import styles from './ProductDetails.module.css';
import {useParams} from "react-router-dom";
import axios from "axios";
import {RiseLoader} from "react-spinners";
import products from "../Products/Products.jsx";
import {Rating} from "@mui/material";
import login from "../Login/Login.jsx";
import SubProduct from "../SubProduct/SubProduct.jsx";



const ProductDetails = () => {


    let {id, CategoryID} = useParams();
    const [ISLoader, setISLoader] = useState(true);
    const [ProductDetails, setProductDetails] = useState();
    const [RelatedProducts, setRelatedProducts] = useState([]);



    useEffect(() => {
        getProductDetails();
        getRelatedProducts();
    }, []);


    function  getProductDetails(){

        axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
            .then(({data}) => {
                setISLoader(false);
                setProductDetails(data.data);


            })
            .catch((error) => console.log(error));

    }

    function getRelatedProducts(){

        axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
            .then(({data}) => {

                let res = data.data.filter(ele => ele.category._id === CategoryID );
                console.log(res);

                setRelatedProducts(res);
                
                
            })
            .catch(error => console.log(error));
    }




    console.log(ProductDetails);


    return (

        <div className={`py-28 min-h-[100vh]  mx-auto w-[90%]`}>

            {ISLoader && <div className={`flex justify-center min-h-[75vh] items-center`}>
                <RiseLoader/>
            </div>}


            {!ISLoader && <div className={`row  min-h-[70vh] justify-start items-center  `}>

                <div className={`rounded-2xl overflow-hidden w-1/6`}>
                    <img src={ProductDetails.imageCover} alt={ProductDetails.category.name}/>
                </div>

                <div className={`w-5/6 px-[30px]`}>
                    <h2 className={`  text-2xl py-[2px] ${styles.font} `}>{ProductDetails.title}</h2>
                    <p className={`  py-[2px] ${styles.font} `}>{ProductDetails.category?.name}</p>

                    <div className={`flex  gap-2 py-[3px]`}>
                        <Rating name="half-rating-read" defaultValue={ProductDetails.ratingsAverage} precision={0.5}
                                readOnly/>
                        <span>{ProductDetails.ratingsAverage}</span>
                    </div>

                    <h3 className={` py-[3px]`}>{ProductDetails.price} E£</h3>

                    <button className={`bg-slate-900 w-[20%] rounded-2xl text-white`}>
                        Add To Cart
                    </button>
                </div>


            </div>
            }

            <div >

                {RelatedProducts.map( products => <SubProduct product={products} />)}

            </div>


        </div>


    );
};

export default ProductDetails;
