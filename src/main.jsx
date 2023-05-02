import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './context/AuthProvider'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Routes}>
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
