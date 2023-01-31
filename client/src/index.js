import React from 'react';
import ReactDOM from 'react-dom/client';
import './input.css';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Dashboard from './components/Dashboard';
import FileUpload from './components/FileUpload';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "/apply",
        element: 
        (
            <div>
                <FileUpload/>
            </div>
        )
    },
    {
        path: "/dashboard",
        element: 
        (   
            <div>
                <Dashboard/>
            </div>
        )
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <RouterProvider router={router} />
);
