import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CheckOut from "../pages/CheckOut/CheckOut";
import BookService from "../pages/BookServices/BookService";
import BookingsList from "../pages/BookingsList/BookingsList";
import PrivatrRoute from "./PrivatrRoute";

const router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          children:[
                {
                        path:'/',
                        element:<Home></Home>
                },
                {
                  path:'login',
                  element:<Login></Login>
                },
                {
                  path:'register',
                  element:<Register></Register>
                },
                {
                  path:'book/:id',
                  element:<BookService></BookService>,
                  loader: ({params}) => fetch(`https://car-doctor-server-five-taupe.vercel.app/services/${params.id}`)
                },
                {
                  path:'checkout/:id',
                  element:<PrivatrRoute><CheckOut></CheckOut></PrivatrRoute>,
                  loader:({params}) => fetch(`https://car-doctor-server-five-taupe.vercel.app/services/${params.id}`)
                },
                {
                  path:'/bookings',
                  element:<PrivatrRoute><BookingsList></BookingsList></PrivatrRoute>
                }

          ]
        },
      ]);
      export default router;