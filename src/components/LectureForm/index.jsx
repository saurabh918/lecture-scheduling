// LectureForm.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import "./style.scss"

const LectureForm = () => {
  const [lectureData, setLectureData] = useState({
    course: '',
    date: '',
    instructor: ''
  });

  // Get courses from Redux store
  const courses = useSelector(state => state.courses.courses);
  const instructors = useSelector(state => state.instructors.instructors);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLectureData({ ...lectureData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., dispatching an action to add the lecture
    console.log('Lecture data:', lectureData);
  };

  return (
    <div className='lecture-form-container'>
      <h3>Schedule Lecture</h3>
      <form onSubmit={handleSubmit}>
        <select name="course" value={lectureData.course} onChange={handleChange}>
          <option value="">Select Course</option>
          {courses.map(course => (
            <option key={uuidv4()} value={course.name}>{course.name}</option>
          ))}
        </select>
        {/* Select instructors */}
          <select name="instructor" value={lectureData.instructor} onChange={handleChange}>
            <option value="">Select Instructors</option>
            {instructors.map(item => (
              <option key={uuidv4()}  value={item}>{item}</option>
            ))}
          </select>
        {/* Display lectures based on the selected course */}
        {lectureData.course && (
          <select name="instructor" value={lectureData.instructor} onChange={handleChange}>
            <option value="">Select lecture</option>
            {/* Populate options with lectures for the selected course */}
            {courses.find(course => course.name === lectureData.course)?.lectures.map(lecture => (
              <option key={uuidv4()}  value={lecture}>{lecture}</option>
            ))}
          </select>
        )}
        <input type="date" name="date" value={lectureData.date} onChange={handleChange} />
        <button type="submit">Add Lecture</button>
      </form>
    </div>
  );
};

export default LectureForm;
