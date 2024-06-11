import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ISesion from './components/ISesion.tsx'
import Registration from './components/Registration.tsx'
import Saludo from './components/Saludo.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/ISesion",
    element: <ISesion />
  },
  {
    path: "/Registration",
    element: <Registration />
  },
  {
    path: "/Saludo",
    element: <Saludo />
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
