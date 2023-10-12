import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getArticlesFromServer = createAsyncThunk(
    "articles/getArticlesFromServer",
    async (url) => {
        return fetch(url)
            .then((res) => res.json())
            .then((data) => data);
    }
);
const articleSlice = createSlice({
    name: "articles",
    initialState: [],
    reducers: {},
    extraReducers: {
        [getArticlesFromServer.fulfilled]: (state , action) => action.payload
    },
});

export default articleSlice.reducer;
