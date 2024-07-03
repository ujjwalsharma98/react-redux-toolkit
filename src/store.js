import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Redux/counterslice'
import userReducer  from './Redux/userSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
})