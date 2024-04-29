import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layout/Root";
import ErrorPage from "../pages/Error/ErrorPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import AddSpot from "../pages/AddSpot/AddSpot";
import AllSpots from "../pages/AllSpots/AllSpots";
import MyList from "../pages/MyList/MyList";

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
            {
                path: "/add-spot",
                element: <PrivateRoute><AddSpot></AddSpot></PrivateRoute>,
            },
            {
                path: "/all-spots",
                element: <AllSpots></AllSpots>,
                loader: () => fetch('http://localhost:5000/all-spots')
            },
            {
                path: "/my-spots",
                element: <PrivateRoute><MyList></MyList></PrivateRoute>,
            },
            {
                path: `/updateSpot/:id`,
                element: <PrivateRoute><MyList></MyList></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/updateSpot/${params.id}`)
            },
            
        ]
    }    
])

export default router;