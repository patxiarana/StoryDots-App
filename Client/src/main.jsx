import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {ApiProvider} from '@reduxjs/toolkit/query/react'
import { productSlice } from './api/apiSlice.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ApiProvider api={productSlice}>
    <App />
    </ApiProvider>
  </React.StrictMode>,
)
