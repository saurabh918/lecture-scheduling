import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
  const currentUser = JSON.parse(localStorage.getItem('user'))
  return (
    <div>
      {
        currentUser ? <Outlet /> : <Navigate to="/" />
      }
    </div>
  )
}

export default PrivateRoutes