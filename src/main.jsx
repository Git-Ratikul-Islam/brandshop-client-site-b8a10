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
import AddProduct from './Components/Pages/AddProduct/AddProduct';
import MyCart from './Components/Pages/MyCart/MyCart';
import Login from './Components/Pages/Login/Login';
import AuthProvider from './Components/Pages/Providers/AuthProvider';
import SignUp from './Components/Pages/Login/SignUp';
import PrivateRoutes from '../my-project/src/Routes/PrivateRoutes';
import Update from './Components/Pages/Update/Update';
import AppleProduct from './Components/Pages/AppleProduct/AppleProduct';







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
        element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
      },
      {
        path: '/updateProduct',
        element: <PrivateRoutes><Update></Update></PrivateRoutes>

      },
      {
        path: '/myCart',
        element: <PrivateRoutes> <MyCart></MyCart></PrivateRoutes>

      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/productsAll',
        element: <PrivateRoutes><AppleProduct></AppleProduct></PrivateRoutes>,
        loader: () => fetch("http://localhost:5000/product")
      },
      {
        path: '/details',

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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
