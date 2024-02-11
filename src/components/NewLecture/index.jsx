import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid'

import { useDispatch, useSelector } from 'react-redux';
import { addLectureToCourse } from '../../reducers/CoursesSlice';

import Popup from '../Popup';

// import css
import "./style.scss";

const NewLecture = () => {
  const [lectureData, setLectureData] = useState({
    course: '',
    lectureType: ''
  });
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false)

  const dispatch = useDispatch()
  const courses = useSelector(state => state.courses.courses)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLectureData({ ...lectureData, [name]: value });
  };

  const handleClose = () => {
    setShowPopup(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    console.log(lectureData.lectureType === true)

    if (!lectureData.course) {
      errors.course = 'Course is required';
    }

    if (!lectureData.lectureType) {
      errors.lectureType = 'Lecture Type is required';
    } else {
      const regex = /[A-Za-z]/;
      if (!regex.test(lectureData.lectureType)) {
        errors.lectureType = 'Lecture type must have at least 1 alphabet character';
      }
    }

    if(courses.length) {
        const course = courses.find(course => course.name === lectureData.course)
        if(course && course.lectures.find(lecture => lecture === lectureData.lectureType)) {
          errors.lectureType = 'This lecture is already present';
        }
      }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Logic to handle form submission
    dispatch(addLectureToCourse({courseName: lectureData.course, lectureType: lectureData.lectureType}))

    // show popup
    setShowPopup(true)

    setErrors({});
    setLectureData({
      course: '',
      lectureType: ''
    });
  };

  return (
    <div className='new-lecture-container'>
      <h3>Add Lecture</h3>
      <form onSubmit={handleSubmit}>
        <select name="course" value={lectureData.course} onChange={handleChange}>
          <option value="">Select Course</option>
          {courses.map(course => (
            <option key={uuidv4()} value={course.name}>{course.name}</option>
          ))}
        </select>
        {errors.course && <div className="error">{errors.course}</div>}
        
        <input type="text" name="lectureType" placeholder="Lecture Type" value={lectureData.lectureType} onChange={handleChange} />
        {errors.lectureType && <div className="error">{errors.lectureType}</div>}
        
        <button type="submit">Add Lecture</button>
      </form>
      {/* custom popup */}
      { showPopup && <Popup message="Lecture added" onClose={handleClose} />}
    </div>
  );
};

export default NewLecture;
