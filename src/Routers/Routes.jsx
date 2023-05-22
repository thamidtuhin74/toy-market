import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
// import Main from "../Layouts/Main/Main";
// import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
// import CardDetails from "../Components/CardDetails/CardDetails";
import Blog from "../Pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";
import PageNotFound from "../Pages/PageNotFound";
import AllToys from "../Pages/AllToys/AllToys";
import AddAToy from "../Pages/AddAToy/AddAToy";
import MyToys from "../Pages/MyToys/MyToys";
import Details from "../Components/Details/Details";
import Edit from "../Components/Edit/Edit";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            // loader: ()=> fetch('https://top-market-server.vercel.app/all-toys/')
            loader: ()=> fetch('https://top-market-server-thamidtuhin74.vercel.app/all-toys/')

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
          // loader: ()=>fetch('https://top-market-server.vercel.app/all-toys/')
          loader: ()=>fetch('https://top-market-server-thamidtuhin74.vercel.app/all-toys/')

          // https://top-market-server-thamidtuhin74.vercel.app/all-toys
      },
      {
          path: "/add-a-toy",
          element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
           
      },
      {
          path: "/my-toys",
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
          loader: ()=>fetch('https://top-market-server-thamidtuhin74.vercel.app/all-toys/')
          // loader: ()=>fetch('https://top-market-server.vercel.app/all-toys/')

      },
      {
          path: "/all-toys/:id",
          element: <PrivateRoute><Details></Details></PrivateRoute> ,
          // loader: ({params})=> fetch(`https://top-market-server.vercel.app/all-toys/${params.id}`)
          loader: ({params})=> fetch(`https://top-market-server-thamidtuhin74.vercel.app/all-toys/${params.id}`)

      },
      {
        path: "/edit/:id",
        element: <Edit></Edit> ,
        loader: ({params})=> fetch(`https://top-market-server-thamidtuhin74.vercel.app/all-toys/${params.id}`)
        // loader: ({params})=> fetch(`https://top-market-server.vercel.app/all-toys/${params.id}`)

      },
      {
          path: "/*",
          element: <PageNotFound></PageNotFound>
      },
        
      ]
    },
  ]);

  export default router