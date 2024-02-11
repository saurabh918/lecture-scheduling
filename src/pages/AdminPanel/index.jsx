import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// import components
import InstructorList from '../../components/InstructorList'
import CourseForm from '../../components/CourseForm'
import LectureForm from '../../components/LectureForm'
import NewLecture from '../../components/NewLecture'

//import css
import "./style.scss"

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