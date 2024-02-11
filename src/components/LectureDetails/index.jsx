import React from 'react'

import PropTypes from 'prop-types'

const LectureDetails = ({item}) => {
  return (
    <tr>
      <td>{item.course}</td>
      <td>{item.lecture}</td>
      <td>{item.date}</td>
    </tr>
  )
}

LectureDetails.propTypes = {
  item: PropTypes.shape({
    course: PropTypes.string.isRequired,
    lecture: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default LectureDetails