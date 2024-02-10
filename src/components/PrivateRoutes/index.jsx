import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Login from '../../pages/LoginPage'

const PrivateRoutes = () => {
  const user = true
  return (
    <div>
      {
        user ? <Outlet /> : <Navigate to={<Login />} />
      }
    </div>
  )
}

export default PrivateRoutes