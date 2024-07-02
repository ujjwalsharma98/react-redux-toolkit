import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Redux/counterslice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})