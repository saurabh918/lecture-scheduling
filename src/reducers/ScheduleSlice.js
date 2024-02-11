import { createSlice } from "@reduxjs/toolkit"

const storedSchedule = JSON.parse(localStorage.getItem('schedule'))
const initialState = storedSchedule ? storedSchedule :{
  allLectures: [
    {instructor: "instructor1" , course: "course1" , lecture: "lecture1", date:"2024-01-12"}
  ]
}

const ScheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    addSchedule: (state,action) => {
      const updatedSchedule = {
        ...state,
        allLectures: [...state.allLectures, action.payload]
      }

      localStorage.setItem("schedule", JSON.stringify(updatedSchedule))
      return updatedSchedule
    } 
  }
})

export const {addSchedule} = ScheduleSlice.actions

export default ScheduleSlice.reducer