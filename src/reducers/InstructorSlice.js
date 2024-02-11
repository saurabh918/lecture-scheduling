import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  instructors: [
    "instructor1",
    "instructor2",
    "instructor3",
    "instructor4",
    "instructor5",
    "instructor6",
    "instructor7"
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