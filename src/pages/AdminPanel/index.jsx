import React, { useEffect } from 'react'

// import components
import InstructorList from '../../components/InstructorList'
import CourseForm from '../../components/CourseForm'
import LectureForm from '../../components/LectureForm'
import NewLecture from '../../components/NewLecture'

//import styles

import "./style.scss"
import { useNavigate } from 'react-router-dom'

const AdminPanel = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'))
    if(userData.role === 'instructor') {
      navigate("/instructor/"+userData.username)
    }
  },[navigate])
  return (
    <div className='admin-panel'>
        <h2>Admin Panel</h2>
        <div className="page-content">
          <InstructorList />
          <CourseForm />
          <NewLecture />
          <LectureForm />
        </div>
    </div>
  )
}

export default AdminPanel