import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider,outlet, Outlet } from "react-router-dom"

import Error from "./component/Error"
import Header from "./component/Header"
import Body from "./component/Body"
import About from "./component/About"
import Contact from "./component/Contact"
import Error from "./component/Error"
import RestaurantMenu from "./component/RestaurantMenu"


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
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            },
        ]
    },
])



const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);





