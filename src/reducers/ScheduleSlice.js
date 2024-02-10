import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  allLectures: [
    {instructor: "instructor1" , course: "course1" , lecture: "lecture1", date:"12-01-2024"}
  ]
}

const ScheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {

  }
})

export const {} = ScheduleSlice.actions

export default ScheduleSlice.reducer