import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  users: [],
  status: 'idle',
  error: null
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    //   getUsers: (state, action) => {
    //     state.users = action.payload
    //   },
    },
    extraReducers(builder) {
        builder
          .addCase(fetchUsers.pending, (state) => {
            state.status = 'loading'
          })
          .addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.users = action.payload
          })
          .addCase(fetchUsers.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
          })
      }
})
  
export const { getUsers } = userSlice.actions

export default userSlice.reducer