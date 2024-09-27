import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Logo from '../../assets/images/Logo.svg';


const Navbar = () => {

    return (
        <nav className={'p-4  bg-[--light-color] fixed top-0 right-0 left-0'}>
           <div className={`container mx-auto flex flex-row items-center justify-around align-middle `}>

               <div>
                   <img src={Logo} width={100} className={``}  />
               </div>

               <div className={`hidden md:block `}>
                   <ul className={`flex flex-col md:flex-row md:gap-4 gap-2`}>
                       <li>
                           <NavLink to={'home'}>Home</NavLink>
                       </li>

                       <li>
                           <NavLink to={'cart'}>Cart</NavLink>
                       </li>

                       <li>
                           <NavLink to={'products'}>Products</NavLink>
                       </li>

                       <li>
                           <NavLink to={'categories'}>Categories</NavLink>
                       </li>

                       <li>
                           <NavLink to={"brands"}>Brands</NavLink>
                       </li>

                   </ul>

               </div>

               <div>
                   <button className={`${styles.btn} bg-amber-300`} >
                       <NavLink to={'register'}>Register</NavLink>
                   </button>

                   <button className={`${styles.btn} bg-amber-300`} >
                       <NavLink to={'login'}>Login</NavLink>
                   </button>
               </div>

           </div>
        </nav>
    );
};

export default Navbar;
