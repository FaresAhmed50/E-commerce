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


function App() {

    
    const Routes = createBrowserRouter([
        {path:"" , element:<Layout/> , children : [
                {index:true , element : <Register/>},

                {path:'home' , element: <Home/>},
                {path : 'about' , element : <About/>},
                {path:'cart' , element:<Cart/>},
                {path:'categories' , element: <Categories/>},
                {path :'brands' , element:<Brands/>},
                {path:'login' , element:<Login/>},
                {path:"products" , element:<Products/>},
                {path:"register" , element:<Register/>},


                {path:'*' , element:<NotFound/>}


            ]}
    ])



    return (
    <>

        <RouterProvider router={Routes}>

        </RouterProvider>
    </>
  )


}

export default App
