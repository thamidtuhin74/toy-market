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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=> fetch('http://localhost:5000/all-toys')
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
          element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
           
      },
      {
          path: "/my-toys",
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
          loader: ()=>fetch('http://localhost:5000/all-toys')
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