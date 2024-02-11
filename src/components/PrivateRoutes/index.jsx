import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoutes = () => {
  const currentUser = useSelector(state => state.auth.currentUser)
  return (
    <div>
      {
        currentUser ? <Outlet /> : <Navigate to="/" />
      }
    </div>
  )
}

export default PrivateRoutes