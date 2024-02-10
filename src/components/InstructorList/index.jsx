// InstructorList.js
import React from 'react';

import "./style.scss"
import { useSelector } from 'react-redux';

const InstructorList = () => {
  // Mock data for instructors
  const instructors = useSelector(state => state.instructors.instructors)

  return (
    <div className='instructor-list-container'>
      <h3>Instructors</h3>
      <ul>
        {instructors.map((instructor, index) => (
          <li key={index}>{instructor}</li>
        ))}
      </ul>
    </div>
  );
};

export default InstructorList;
