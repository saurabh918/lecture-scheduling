import React from 'react'

// import components
import InstructorList from '../../components/InstructorList'
import CourseForm from '../../components/CourseForm'
import LectureForm from '../../components/LectureForm'
import NewLecture from '../../components/NewLecture'

//import styles

import "./style.scss"

const AdminPanel = () => {
  return (
    <div className='admin-panel'>
        <h2>Admin Panel</h2>
        <InstructorList />
        <CourseForm />
        <NewLecture />
        <LectureForm />
    </div>
  )
}

export default AdminPanel