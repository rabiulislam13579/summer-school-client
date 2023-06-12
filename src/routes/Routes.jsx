import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../pages/Layout/Main";
import Error from "../pages/error/Error";
import Home from "../pages/home/home/Home";
import Instructors from "../pages/loadData/Instructors";
import Classes from "../pages/loadData/Classes";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import Dashboard from "../dashbord/Dashboard";
import MyCart from "../dashboardPages/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../dashbord/AllUsers/AllUsers";
import AddClass from "../dashbord/AddClass/AddClass";
import AdminRoute from "./AdminRoute";
import ManageClass from "../dashbord/ManageClass/ManageClass";
import AllCourses from "../dashbord/AllCourses/AllCourses";
import Payment from "../dashboardPages/Payment/Payment";

    export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/instructors',
            element: <Instructors></Instructors>
        },
        {
            path: '/classes',
            element: <Classes></Classes>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
      
      ]
      
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
      errorElement: <Error></Error>,
      children: [
        {
          path: 'myCart',
          element: <MyCart></MyCart>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'manageUsers',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: 'addClass',
          element: <AdminRoute><AddClass></AddClass></AdminRoute>
        },
        {
          path: 'update/:id',
          element: <AdminRoute><ManageClass></ManageClass></AdminRoute>,
          loader: ({params})=>fetch(`https://summer-school-server-six.vercel.app/classes/${params.id}`)
        },
        {
          path: 'allCourse',
          element: <AdminRoute><AllCourses></AllCourses></AdminRoute>
        }
      ]

    }
  ]);