import React, { useState,useEffect } from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import { lazy,Suspense } from "react"
import UserContext from "./util/UserContext"
import {Provider} from "react-redux"


import Header from "./component/Header"
import Body from "./component/Body"
import About from "./component/About"
import Contact from "./component/Contact"
import RestaurantMenu from "./component/RestaurantMenu"
import Error from "./component/Error"
import MachineCoding from "./component/MachineCoding"
import TestComponent from "./component/TestComponent"
import Cart from "./component/Cart"
import appStore from "./util/store/appStore"
import Footer from "./component/Footer"
import AboutUs from "./component/AboutUs"
const Grocery=lazy(()=>import("./component/Grocery"))

const App=()=>{
    // const [userName,setUserName]=useState('')
    // useEffect(() => {
    //     const data={
    //         name:""
    //     };
    //     setUserName(data.name)
    // },[]); 
    
    return (
        <Provider store={appStore}>
       
            <div>
                <Header/> 
                <Outlet/>
                <Footer/>
            </div>
       
        </Provider>
    );
};

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>loading....</h1>}>
                             <Grocery/>
                        </Suspense>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },            
            {
                path:"/aboutus",
                element:<AboutUs/>
            },            
            {
                path:"/machine",
                element:<MachineCoding/>
            }            
        ]
    },
    
])



const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);





