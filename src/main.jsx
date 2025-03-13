import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Router'
import "./index.css";
import AuthProvider from './provider/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>

      </RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
