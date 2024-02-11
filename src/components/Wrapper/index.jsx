import React from 'react'

// import css
import "./style.scss"

const Wrapper = ({children}) => {
  return (
    <div className='wrapper'>
      {children}
    </div>
  )
}

export default Wrapper