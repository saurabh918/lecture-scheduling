// coursesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const storedCourses = JSON.parse(localStorage.getItem('courses'))
const initialState = storedCourses ? storedCourses : {
  courses : [
    {name: "course1", level:1, description:"course 1description", image:"img-src", lectures: ["course1-lecture1","course1-lecture2"]},
    {name: "course2", level:2, description:"course 2description", image:"img-src", lectures: ["course2-lecture1","course2-lecture2"]}
  ]
}

export const CoursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    addCourse: (state, action) => {
      const updatedCourses =  {
        ...state,
        courses: [...state.courses, action.payload]
      }

      localStorage.setItem('courses', JSON.stringify(updatedCourses))

      return updatedCourses
    },
    addLectureToCourse: (state, action) => {
      const { courseName, lectureType } = action.payload;
      const addedLecture = {
        ...state,
        courses: state.courses.map((course) => {
          if(courseName === course.name) {
            return {
              ...course,
              lectures: [...course.lectures, lectureType]
            }
          } else {
            return course
          }
        })
      }

      localStorage.setItem('courses', JSON.stringify(addedLecture))
      return addedLecture
    },
  },
});

export const { addCourse, addLectureToCourse } = CoursesSlice.actions;

export default CoursesSlice.reducer;
