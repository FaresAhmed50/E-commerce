import React, {useState} from 'react';
import styles from './Register.module.css';
import {useFormik} from "formik";
import axios from "axios";
import * as Yup from 'yup'
import {Alert} from "@mui/material";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'
import {useNavigate} from "react-router-dom";

const Register = () => {

    let [ApiError, setApiError] = useState(null);
    const [isLoadeing, setIsLoadeing] = useState(false);
    let navigate = useNavigate();

    const MySwal = withReactContent(Swal);

    function Register (formValue){
        console.log("hello" , formValue);
        setIsLoadeing(true);

         axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup' , formValue)
             .then( (res) => {

                 let{data} = res;

                 if(data.message == 'success'){
                     navigate('/login');
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
            name:"",
            email:"",
            password:"",
            rePassword:"",
            phone:""
        },

        validationSchema : Yup.object({

            name : Yup.string().required("Required")
                .min(4 , "Name must be at least 4 character")
                .max(10 , "Name can't exceed 10 character "),

            email : Yup.string().email("Invalid Email Address").required("Required"),

            password : Yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/ , "" ).required("Required"),

            rePassword : Yup.string().oneOf([Yup.ref("password")] , "password must match RePassword").required("Required"),

            phone : Yup.string().matches( /^01[0-2,5]{1}[0-9]{8}$/ , "Invalid phone number").required("Required"),
        }),



        onSubmit:Register,

    })


    return (
        <div className={`${styles.back_img} min-h-[100vh] overflow-hidden  py-20 flex justify-center items-center `}>



            <form onSubmit={formik.handleSubmit} className=" mx-auto w-[50%] p-3 border-2 rounded-2xl    ">

                <h1 className={`text-center`}>Register</h1>

                <div className="mb-5">
                    <label htmlFor="name"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="text" id="name" name={'name'} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name}
                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                           placeholder="Name"/>
                </div>

                {formik.errors.name && formik.touched.name ? <Alert className={`mb-2`} severity="error">{formik.errors.name}</Alert> : null}


                <div className="mb-5">
                    <label htmlFor="email"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" id="email" name={'email'} onChange={formik.handleChange} onBlur={formik.handleBlur}
                           value={formik.values.email}
                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                           placeholder="name@something.com"/>
                </div>

                {formik.errors.email && formik.touched.email ? <Alert className={`mb-2`} severity="error">{formik.errors.email}</Alert> : null}

                <div className="mb-5">
                    <label htmlFor="password"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" id="password" name={'password'} onChange={formik.handleChange} onBlur={formik.handleBlur}
                           value={formik.values.password}
                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                           placeholder="Password"/>
                </div>




                {formik.errors.password && formik.touched.password ? <Alert className={`mb-2`} severity="error">{formik.errors.password}</Alert> : null}

                <div className="mb-5">
                    <label htmlFor="rePassword"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Re-Password</label>
                    <input type="password" id="rePassword" name={'rePassword'} onChange={formik.handleChange} onBlur={formik.handleBlur}
                           value={formik.values.rePassword}
                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                           placeholder={'Re-password'}/>
                </div>

                {formik.errors.rePassword && formik.touched.rePassword ? <Alert className={`mb-2`} severity="error">{formik.errors.rePassword}</Alert> : null}

                <div className="mb-5">
                    <label htmlFor="phone"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                    <input type="text" id="phone" name={'phone'} onChange={formik.handleChange} onBlur={formik.handleBlur}
                           value={formik.values.phone}
                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                           placeholder={'Phone'}/>
                </div>

                {formik.errors.phone && formik.touched.phone ? <Alert className={`mb-2`} severity="error">{formik.errors.phone}</Alert> : null}

                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input id="terms" type="checkbox" value=""
                               className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                               required/>
                    </div>
                    <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember-ME</label>
                </div>
                <button type="submit" disabled={isLoadeing}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {isLoadeing ? <i className={`fa fa-spinner fa-spin`}></i> : 'Register new Account' }
                </button>


            </form>



        </div>
    );
};

export default Register;
