import React from 'react';

import { useSelector } from 'react-redux';

// import css
import "./style.scss"

const InstructorList = () => {
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
