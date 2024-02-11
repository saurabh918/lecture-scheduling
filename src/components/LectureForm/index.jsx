import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import "./style.scss";
import { addSchedule } from '../../reducers/ScheduleSlice';
import Popup from '../Popup';

const LectureForm = () => {
  const [lectureData, setLectureData] = useState({
    course: '',
    date: '',
    lecture: '',
    instructor: ''
  });
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false)

  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.courses);
  const instructors = useSelector(state => state.instructors.instructors);
  const allLectures = useSelector(state => state.schedule.allLectures)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLectureData({ ...lectureData, [name]: value });
  };

  const handleClose = () => {
    setShowPopup(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!lectureData.course || !lectureData.date || !lectureData.lecture || !lectureData.instructor) {
      setError('Please fill in all fields.');
      return;
    } else{
      const instructorLectures = allLectures.filter(item => item.instructor === lectureData.instructor)
      if(instructorLectures && instructorLectures.find(item => item.date === lectureData.date)) {
        setError('Instructor already is assigned for this date.');
        return
      }
    } 
      // Dispatch action to add schedule
      dispatch(addSchedule({ instructor: lectureData.instructor, course: lectureData.course, lecture: lectureData.lecture, date: lectureData.date }));
      // show popup
      setShowPopup(true)
      // Clear form fields and error message
      setLectureData({
        course: '',
        date: '',
        lecture: '',
        instructor: ''
      });
      setError('');
  };

  return (
    <div className='lecture-form-container'>
      <h3>Schedule Lecture</h3>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <select name="course" value={lectureData.course} onChange={handleChange}>
          <option value="">Select Course</option>
          {courses.map(course => (
            <option key={uuidv4()} value={course.name}>{course.name}</option>
          ))}
        </select>
        <select name="instructor" value={lectureData.instructor} onChange={handleChange}>
          <option value="">Select Instructor</option>
          {instructors.map(item => (
            <option key={uuidv4()} value={item}>{item}</option>
          ))}
        </select>
        {lectureData.course && (
          <select name="lecture" value={lectureData.lecture} onChange={handleChange}>
            <option value="">Select Lecture</option>
            {courses.find(course => course.name === lectureData.course)?.lectures.map(lecture => (
              <option key={uuidv4()} value={lecture}>{lecture}</option>
            ))}
          </select>
        )}
        <input type="date" name="date" value={lectureData.date} onChange={handleChange} />
        <button type="submit">Schedule Lecture</button>
      </form>
      {showPopup && <Popup message="Lecture scheduled" onClose={handleClose} />}
    </div>
  );
};

export default LectureForm;
