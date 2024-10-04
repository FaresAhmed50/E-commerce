import React, {useContext, useState} from 'react';
import styles from './Login.module.css';
import {useNavigate} from "react-router-dom";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import axios from "axios";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Alert} from "@mui/material";
import {UserTokenContext} from "../../Context/UserTokenContext.jsx";

const Login = () => {

    let [ApiError, setApiError] = useState(null);
    const [isLoadeing, setIsLoadeing] = useState(false);
    let navigate = useNavigate();
    const {Token , setToken} = useContext(UserTokenContext);

    const MySwal = withReactContent(Swal);

    function login (formValue){
        console.log("hello" , formValue);
        setIsLoadeing(true);

        axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin' , formValue)
            .then( (res) => {

                let{data} = res;

                if(data.message == 'success'){


                    localStorage.setItem("token" , data.token);
                    setToken(data.token);
                    console.log(Token);

                    navigate('/home');
                }


            } )
            .catch((err) => {

                console.log(err)
                setApiError(err.response.data.message);
                setIsLoadeing(false);


                MySwal.fire({
                    title: 'Registration Failed',
                    text: ApiError,
                    icon: 'error',
                    showClass: {
                        popup: 'animate__animated animate__fadeInUp animate__faster',
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutDown animate__faster',
                    },
                });

            });


    }


    const formik = useFormik({

        initialValues:{

            email:"",
            password:""

        },

        validationSchema : Yup.object({

            email : Yup.string().email("Invalid Email Address").required("Required"),

            password : Yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/ , "" ).required("Required")

        }),



        onSubmit:login,

    })








    return (

        <div className={` ${styles.back_img} min-h-[100vh] overflow-hidden  py-20 flex justify-center items-center `}>


            <form onSubmit={formik.handleSubmit} className=" mx-auto w-[50%] p-3 border-2 rounded-2xl    ">

                <h1 className={`text-center font-bold text-2xl`}>Login</h1>


                <div className="mb-5">
                    <label htmlFor="email"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" id="email" name={'email'} onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.email}
                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                           placeholder="name@something.com"/>
                </div>

                {formik.errors.email && formik.touched.email ? <Alert className={`mb-2`} severity="error">{formik.errors.email}</Alert> : null}


                <div className="mb-5">
                    <label htmlFor="password"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" id="password" name={'password'} onBlur={formik.handleBlur} onChange={formik.handleChange}  value={formik.values.password}
                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                           placeholder="Password"/>
                </div>

                {formik.errors.password && formik.touched.password ? <Alert className={`mb-2`} severity="error">{formik.errors.password}</Alert> : null}





                <button type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {isLoadeing ? <i className={`fa fa-spinner fa-spin`}></i> : 'Log in '}
                </button>


            </form>
        </div>

    );
};

export default Login;
