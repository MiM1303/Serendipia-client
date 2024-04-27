import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layout/Root";
import ErrorPage from "../pages/Error/ErrorPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            
            
        ]
    }    
])

export default router;