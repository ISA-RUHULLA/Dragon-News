import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "./pages/Home";
import Category from "./pages/Category";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <HomeLayout/>,
            children: [
                {
                    path:"",
                    element: <Home/>
                },
                {
                    path:"/category/:id",
                    element: <Category/>
                },
                
            ]
        },
        {
            path:"/auth",
            element: <h2>Authentication layout</h2>
        },
        {
            path: "/news",
            element: <h2>News LayOut</h2>
        },
        {
            path: "/*",
            element: <h2>Error-404</h2>
        }
    ]
)
export default router;