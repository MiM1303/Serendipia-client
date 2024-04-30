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
import Update from "../pages/Update/Update";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import Countries from "../pages/Countries/Countries";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/all-spots'),
            },
            // {
            //     path: '/',
            //     element: <Countries></Countries>,
            //     loader: () => fetch('http://localhost:5000/countries'),
            // },
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
                path: "/all-spots/sorted",
                element: <AllSpots></AllSpots>,
                loader: () => fetch('http://localhost:5000/all-spots/sorted')
            },
            {
                path: "/all-spots/:id",
                element: <ViewDetails></ViewDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/all-spots/${params.id}`)
            },
            {
                path: "/my-spots",
                element: <PrivateRoute><MyList></MyList></PrivateRoute>,
            },
            {
                path: `/updateSpot/:id`,
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/add-spot/${params.id}`)
            },
            
        ]
    }    
])

export default router;