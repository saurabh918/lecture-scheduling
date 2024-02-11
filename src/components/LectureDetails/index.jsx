import React from 'react'

const LectureDetails = ({item}) => {
  return (
    <tr>
      <td>{item.course}</td>
      <td>{item.lecture}</td>
      <td>{item.date}</td>
    </tr>
  )
}

export default LectureDetails