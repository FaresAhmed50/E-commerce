import React, {useContext} from 'react';
import styles from './Navbar.module.css';
import {NavLink, useNavigate} from "react-router-dom";
import Logo from '../../assets/images/Logo.svg';
import {UserTokenContext} from "../../Context/UserTokenContext.jsx";


const Navbar = () => {

    let {Token , setToken} = useContext(UserTokenContext);
    let navigate = useNavigate();

    function LogOut(){

        setToken(null);
        localStorage.setItem('token' , null);
        console.log(Token);
        navigate('/login');
    }






    return (
        <nav className={'p-4  bg-[--light-color] fixed top-0 right-0 left-0 z-30'}>
            <div className={`container mx-auto flex flex-row items-center justify-around align-middle `}>

                <div>
                    <img src={Logo} width={100}/>
                </div>

                <div className={`hidden md:block `}>

                    {Token ? <ul className={`flex flex-col md:flex-row md:gap-4 gap-2`}>
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

                </ul> : null
                }

            </div>

            {Token ? <button onClick={LogOut} className={`${styles.btn} bg-amber-300`}>Log-OUT</button> :
                    <div>
                        <button className={`${styles.btn} bg-amber-300`}>
                            <NavLink to={'register'} className={`text-white`}>Register</NavLink>
                        </button>

                        <button className={`${styles.btn} bg-amber-300`}>
                            <NavLink to={'login'} className={`text-white`}>Login</NavLink>
                        </button>
                    </div>


                }


            </div>
        </nav>
    );
};

export default Navbar;
