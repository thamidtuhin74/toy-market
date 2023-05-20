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
import Details from "../Component/Details/Details";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
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
            path: "/blog",
            element: <Blog></Blog>
        },
        {
            path: "/all-toys",
            element: <AllToys></AllToys>,
            loader: ()=>fetch('http://localhost:5000/all-toys')
        },
        {
            path: "/add-a-toy",
            element: <AddAToy></AddAToy>
        },
        {
            path: "/my-toys",
            element: <MyToys></MyToys>
        },
        {
            path: "/all-toys/:id",
            element: <Details></Details> ,
            loader: ({params})=> fetch(`http://localhost:5000/all-toys/${params.id}`)
        },
        {
            path: "/*",
            element: <PageNotFound></PageNotFound>
        },
        
      ]
    },
  ]);

  export default router