import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import { lazy,Suspense } from "react"

import Header from "./component/Header"
import Body from "./component/Body"
import About from "./component/About"
import Contact from "./component/Contact"
import RestaurantMenu from "./component/RestaurantMenu"
import Error from "./component/Error"

const Grocery=lazy(()=>import("./component/Grocery"))
const App=()=>{
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

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
        ]
    },
    
])



const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);





