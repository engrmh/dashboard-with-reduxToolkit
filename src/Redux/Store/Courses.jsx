import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCoursesFromServer = createAsyncThunk(
    "courses/getCoursesFromServer",
    async (url) => {
        return fetch(url)
            .then((res) => res.json())
            .then((data) => data);
    }
);
const courseSlice = createSlice({
    name: "courses",
    initialState: [],
    reducers: {},
    extraReducers: {
        [getCoursesFromServer.fulfilled]: (state , action) => action.payload
    },
});

export default courseSlice.reducer;
