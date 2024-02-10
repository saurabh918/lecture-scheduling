import { composeWithDevTools } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import CoursesSlice from "./reducers/CoursesSlice";
import InstructorSlice from "./reducers/InstructorSlice";
import ScheduleSlice from "./reducers/ScheduleSlice";
import AuthSlice from "./reducers/AuthSlice";

const store = configureStore({
  reducer:{
    courses: CoursesSlice,
    instructors: InstructorSlice,
    schedule: ScheduleSlice,
    auth: AuthSlice
  },
},composeWithDevTools()
)

export default store