import React from 'react'
import { Route, Routes } from 'react-router-dom'

import PrivateRoutes from '../PrivateRoutes'
import Login from '../../pages/LoginPage'
import AdminPanel from '../../pages/AdminPanel'
import InstructorPanel from '../../pages/InstructorPanel'
import ErrorPage from '../../pages/ErrorPage'

const RouterComponent = () => {
  return (
    <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path='/' element={<Login />} />
          <Route path='/admin' element={<AdminPanel />} />
          <Route path='/instructor/:name?' element={<InstructorPanel />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
    </Routes>
  ) 
}

export default RouterComponent