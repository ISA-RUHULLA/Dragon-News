import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "./pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout />,
            children: [
                {
                    path: "",
                    element: <Home />
                },
                {
                    path: "/category/:id",
                    element: <Category />,
                    loader: () => fetch('/news.json')

                },

            ]
        },
        {
            path: "/auth",
            element: <AuthLayout />,
            children: [
                {
                    path: '/auth/login',
                    element: <Login />
                },
                {
                    path: '/auth/register',
                    element: <Register />
                },
            ]
        },
        {
            path: "/news-details/:id",
            element: <PrivateRoute>
                <NewsDetails />
            </PrivateRoute>,
            loader: () => fetch('/news.json')
        },
        {
            path: "/*",
            element: <h2>Error-404</h2>
        }
    ]
)
export default router;