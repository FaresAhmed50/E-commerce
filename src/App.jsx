import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Register from "./components/Register/Register.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Categories from "./components/Categories/Categories.jsx";
import Brands from "./components/Brands/Brands.jsx";
import Login from "./components/Login/Login.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import Products from "./components/Products/Products.jsx";
import CounterContextProvider from "./Context/CounterContext.jsx";
import UserTokenContextProvider from "./Context/UserTokenContext.jsx";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";


function App() {

    
    const Routes = createBrowserRouter([
        {path:"" , element:<Layout/> , children : [


                {index:true , element : <Register/>},

                {path:'home' , element: <ProtectedRoutes><Home/></ProtectedRoutes>},
                {path : 'about' , element : <ProtectedRoutes><About/></ProtectedRoutes>},
                {path:'cart' , element: <ProtectedRoutes> <Cart/></ProtectedRoutes>},
                {path:'categories' , element: <ProtectedRoutes><Categories/></ProtectedRoutes>},
                {path :'brands' , element: <ProtectedRoutes><Brands/></ProtectedRoutes>},
                {path:"products" , element: <ProtectedRoutes><Products/></ProtectedRoutes>},
                {path:"productDetails/:id/:CategoryID" , element:<ProtectedRoutes><ProductDetails/></ProtectedRoutes>},


                {path:'login' , element:<Login/>},
                {path:"register" , element:<Register/>},


                {path:'*' , element:<NotFound/>}


            ]}
    ])



    return (
    <>

        <UserTokenContextProvider>
            <CounterContextProvider>
                <RouterProvider router={Routes}>

                </RouterProvider>
            </CounterContextProvider>

        </UserTokenContextProvider>


    </>
  )


}

export default App
