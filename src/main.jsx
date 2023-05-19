import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  // createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Main from './Layout/Main/Main';
// import Home from './Pages/Home/Home';
import router from './Router/Routers';
// import AuthProvider from './Providers/AuthProvider';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main></Main>,
//     children:[
//       {
//         path: "/",
//         element: <Home></Home>,
//       }
      
      
//     ]
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    
  </React.StrictMode>,
)
