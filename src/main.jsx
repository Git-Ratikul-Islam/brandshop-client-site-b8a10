import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Components/Pages/Home/Home';
import ErrorElement from './Components/ErrorElement/ErrorElement';
import ErrorRoute404 from './Components/ErrorRoute404/ErrorRoute404';
import AddProduct from './Components/Pages/Footer/AddProduct/AddProduct';
import MyCart from './Components/Pages/MyCart/MyCart';
import Login from './Components/Pages/Login/Login';
import SignUp from './Components/Pages/Login/SignUp';






const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addProduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/myCart',
        element: <MyCart></MyCart>

      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      }
    ],
  },
  {
    path: '*',
    element: <ErrorRoute404></ErrorRoute404>
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
