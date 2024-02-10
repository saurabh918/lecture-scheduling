// coursesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courses : [
    {name: "course1", lectures: ["lecture1","lecture2"]},
    {name: "course2", lectures: ["lecture3","lecture4"]}
  ]
}

export const CoursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    addCourse: (state, action) => {
      return {
        ...state,
        courses: [...state.courses, action.payload]
      }
    },
    addLectureToCourse: (state, action) => {
      const { courseId, lecture } = action.payload;
      const course = state.find(course => course.id === courseId);
      if (course) {
        course.lectures.push(lecture);
      }
    },
  },
});

export const { addCourse, addLectureToCourse } = CoursesSlice.actions;

export default CoursesSlice.reducer;
