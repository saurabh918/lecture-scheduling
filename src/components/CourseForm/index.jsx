import React, { useState } from 'react';
import "./style.scss"
import { useDispatch, useSelector } from 'react-redux';
import { addCourse } from '../../reducers/CoursesSlice';
import Popup from '../Popup';

const CourseForm = () => {
  const [courseData, setCourseData] = useState({
    name: '',
    level: '',
    description: '',
    image: ''
  });
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false)

  const handleChange = (e) => {
    const { name, value, type } = e.target;
  
    // Check if the input is an image file
    if (type === 'file') {
      const file = e.target.files[0];
      
      // Check if a file is selected
      if (file) {
        // Check if the file type is an image
        if (!file.type.startsWith('image/')) {
          // Reset the input value to clear the selected file
          e.target.value = null;
          // Display an alert informing the user to select an image file
          alert('Please select an image file.');
          return;
        }
  
        // If the file is an image, process it
        const reader = new FileReader();
        reader.onloadend = () => {
          setCourseData({ ...courseData, [name]: reader.result });
        };
        reader.readAsDataURL(file);
      }
    } else {
      // Handle non-file inputs
      setCourseData({ ...courseData, [name]: value });
    }
  };
  const dispatch = useDispatch()
  const courses = useSelector(state => state.courses.courses)

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    // Check for validation
    if (!courseData.name) {
      errors.name = 'Course Name is required';
    }

    const regex = /[A-Za-z]{1}/
    if(!(courseData.name.match(regex))) {
      errors.name = 'Course Name must have at least 1 alphabet character';
    }

    if (courses.find(course => course.name === courseData.name)) {
      errors.name = 'This course is already present';
    }
    if (!courseData.level) {
      errors.level = 'Level is required';
    }
    if (!courseData.description) {
      errors.description = 'Description is required';
    }

    // If there are errors, set them and return
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // If no errors, proceed with form submission
    console.log('Course data:', courseData);
    // Add logic to handle form submission, e.g., dispatching an action to add the course

    dispatch(addCourse({name: courseData.name,level: courseData.level, description: courseData.description, image: courseData.image.substring(0,20), lectures: []}))
    
    setShowPopup(true)
    // Clear errors after successful submission
    setErrors({});
    setCourseData({name: '', level: '', description: '', image: ''})
  };

  const handleOnClose = () => {
    setShowPopup(false)
  }

  return (
    <div className='course-form-container'>
      <h3>Add Course</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Course Name" value={courseData.name} onChange={handleChange} />
        {errors.name && <div className="error">{errors.name}</div>}
        
        <select name="level" value={courseData.level} onChange={handleChange}>
          <option value="">Select Level</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          </select>
        {errors.level && <div className="error">{errors.level}</div>}
        
        <textarea name="description" placeholder="Description" value={courseData.description} onChange={handleChange} />
        {errors.description && <div className="error">{errors.description}</div>}
        
        {/* Input for image */}
        <label htmlFor="imageUpload">Choose an image:</label>
        <input type="file" className='image-input' id="imageUpload" name="image" accept="image/*" onChange={handleChange} />
        {errors.image && <div className="error">{errors.image}</div>}
        
        {/* Display image preview */}
        {courseData.image && (
          <img src={courseData.image} alt="Preview" style={{ maxWidth: '100px', marginTop: '10px' }} />
        )}
        <button type="submit" className='add-course'>Add Course</button>
      </form>
      {
        showPopup && <Popup message="Course added successfully" onClose={handleOnClose} />
      }
    </div>
  );
};

export default CourseForm;
