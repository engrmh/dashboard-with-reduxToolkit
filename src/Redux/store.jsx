import { configureStore } from "@reduxjs/toolkit";
import userSlice from './Store/Users'
import courseSlice from './Store/Courses'
import articleSlice from "./Store/Articles";

const store = configureStore({
    reducer: {
        users : userSlice,
        courses: courseSlice,
        articles: articleSlice
    }
})

export default store