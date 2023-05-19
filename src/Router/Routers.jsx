import {
    createBrowserRouter,
    // RouterProvider,
  } from "react-router-dom";
import Main from '../Layout/Main/Main';
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import PageNotFound from "../Component/Header/PageNotFound";
import AllToys from "../Pages/AllToys/AllToys";
import AddAToy from "../Pages/AddAToy/AddAToy";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=> fetch('https://chef-recipe-hunter-server-thamidtuhin74.vercel.app/chefs')
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            // path: "/card-details/:chefID",
            // element: <CardDetails></CardDetails>,
            // loader: ({params})=> fetch(`https://chef-recipe-hunter-server-thamidtuhin74.vercel.app/chefs/${params.chefID}`)

        },
        {
            path: "/blog",
            element: <Blog></Blog>
        },
        {
            path: "/all-toys",
            element: <AllToys></AllToys>
        },
        {
            path: "/add-a-toy",
            element: <AddAToy></AddAToy>
        },
        {
            path: "/my-toys",
            element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
            path: "/*",
            element: <PageNotFound></PageNotFound>
        },
        
      ]
    },
  ]);

  export default router