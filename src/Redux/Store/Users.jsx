import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsersFromServer = createAsyncThunk(
  "users/getUsersFromServer",
  async (url) => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  }
);
export const removeUser = createAsyncThunk(
    "users/getUsersFromServer",
    async (id) => {
        return fetch(`https://redux-cms.iran.liara.run/api/users${id}` ,{
            method: 'DELETE'
        })
            .then((res) => res.json())
            .then(data => data)
    }
);
const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {},
    extraReducers: builder =>  {
      builder.addCase(getUsersFromServer.fulfilled , (state , action) => action.payload),
      builder.addCase(removeUser.fulfilled , (state , action) => {
          const newUsers = state.filter(user => user._id !== action.payload.id)
          return newUsers
      })
    }
});

export default userSlice.reducer;
