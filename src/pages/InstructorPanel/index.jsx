import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import LectureDetails from '../../components/LectureDetails'

import "./style.scss"

const InstructorPanel = () => {
  const navigate = useNavigate()
  const userData = JSON.parse(localStorage.getItem('user'))
  const currentParams = useParams()

  useEffect(() => {
    if(userData.role === 'admin') {
      navigate("/admin")
    }
  },[navigate,userData.role])

  useEffect(() => {
    if(userData.role === 'instructor') {
      navigate("/instructor/"+userData.username)
    }
  },[navigate,userData.username,userData.role])
  
  const currentUser = currentParams.name
  console.log("currentUser",currentUser)
  const allLectures = useSelector(state => state.schedule.allLectures)
  const instructorLectures = allLectures.filter(item => item.instructor === currentUser)
  return (
    <div className='instructor-panel'>
      <h2>Instructor panel</h2>
      <h3>Your scheduled lectures</h3>
      {
        instructorLectures.length ? 
        <table>
        <thead>
          <th>Course</th>
          <th>Lecture</th>
          <th>Date</th>
        </thead>
        <tbody>
          {
            instructorLectures.map(item => {
              return <LectureDetails item={item} key={uuidv4()} />
            })
          }
        </tbody>
      </table>
        :<p>You are not assigned to any lectures</p>
      }
    </div>
  )
}

export default InstructorPanel