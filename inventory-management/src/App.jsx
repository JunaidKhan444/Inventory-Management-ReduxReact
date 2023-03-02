import React from 'react';
import './App.css';
import SideNav from './SideNav';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categories from './components/Categories';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Items from './components/Items';


const router = createBrowserRouter([
    {
        path: "/",
        element: <SideNav />,
        children: [
            {
                path: "categories",
                element: <Categories />,
                // children: [
                //     {
                //         path: "add",
                //         element:""
                //     },
                // ],
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "users",
                element: <Users />,
            },
            {
                path: "items",
                element: <Items />,
            },
        ],
    }

]);

function App() {

    return (

        <RouterProvider router={router} />
    )
}

export default App
