import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from './store.js'
import { Provider } from 'react-redux'
import axios from 'axios';

axios.interceptors.request.use((request) => {
  request.headers.token = 'Bearer Test'
  return request
})

axios.interceptors.response.use((response) => {
  return response
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
)
