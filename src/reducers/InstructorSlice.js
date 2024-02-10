import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  instructors: [
    "instructor1",
    "instructor2"
  ]
}

export const InstructorSlice = createSlice({
  name: 'instructors',
  initialState,
  reducers: {
    addInstructor: (state, action) => {
      return {
        ...state,
        instructors: [...state.instructors, action.payload]
      }
    },
  },
});

export const {addInstructor} = InstructorSlice.actions

export default InstructorSlice.reducer