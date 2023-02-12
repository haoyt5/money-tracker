import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import SocketProvider from './context/SocketProvider'
import { router } from './routes/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    // <React.StrictMode>
    <SocketProvider>
        <RouterProvider router={router} />
    </SocketProvider>
    // </React.StrictMode>
)
