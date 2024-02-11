import React from 'react'

import "./style.scss"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../reducers/AuthSlice'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logout())
    navigate("/")
  }
  return (
    <div className='header'>
      <Link to="/">
        <h1>Lecture Schedular</h1>
      </Link>
      <button onClick={() => handleLogout()}>Log out</button>
    </div>
  )
}

export default Header