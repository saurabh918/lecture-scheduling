import React, { useState } from 'react';

import "./style.scss"; // Import your SCSS file
import { useSelector } from 'react-redux';


const NewLecture = () => {
  const [lectureData, setLectureData] = useState({
    course: '',
    lectureType: ''
  });
  const [errors, setErrors] = useState({});

  const courses = useSelector(state => state.courses.courses)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLectureData({ ...lectureData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if (!lectureData.course) {
      errors.course = 'Course is required';
    }
    if (!lectureData.lectureType) {
      errors.lectureType = 'Lecture Type is required';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    console.log('Lecture data:', lectureData);
    // Add logic to handle form submission, e.g., dispatching an action to add the lecture

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
            <option key={course.id} value={course.id}>{course.name}</option>
          ))}
        </select>
        {errors.course && <div className="error">{errors.course}</div>}
        
        <input type="text" name="lectureType" placeholder="Lecture Type" value={lectureData.lectureType} onChange={handleChange} />
        {errors.lectureType && <div className="error">{errors.lectureType}</div>}
        
        <button type="submit">Add Lecture</button>
      </form>
    </div>
  );
};

export default NewLecture;
