import React, { useState } from 'react';
import "./style.scss"

const CourseForm = () => {
  const [courseData, setCourseData] = useState({
    name: '',
    level: '',
    description: '',
    image: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    
    // Check if the input is an image file
    if (type === 'file') {
      // Process the file
      const file = e.target.files[0];
      // Display a preview of the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setCourseData({ ...courseData, [name]: reader.result });
      };
      reader.readAsDataURL(file);
    } else {
      setCourseData({ ...courseData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    // Check for validation
    if (!courseData.name) {
      errors.name = 'Course Name is required';
    }
    if (!courseData.level) {
      errors.level = 'Level is required';
    }
    if (!courseData.description) {
      errors.description = 'Description is required';
    }
    if (!courseData.image) {
      errors.image = 'Image is required';
    }

    // If there are errors, set them and return
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // If no errors, proceed with form submission
    console.log('Course data:', courseData);
    // Add logic to handle form submission, e.g., dispatching an action to add the course

    // Clear errors after successful submission
    setErrors({});
  };

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
        <input type="file" name="image" accept="image/*" onChange={handleChange} />
        {errors.image && <div className="error">{errors.image}</div>}
        
        {/* Display image preview */}
        {courseData.image && (
          <img src={courseData.image} alt="Preview" style={{ maxWidth: '100px', marginTop: '10px' }} />
        )}
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
};

export default CourseForm;
