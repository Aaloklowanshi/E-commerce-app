import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { AuthProvider } from './context/auth'
import 'antd/dist/reset.css'
import { SearchProvider } from './context/Search.jsx'
import { CartProvider } from './context/Cart.jsx'
// import dotenv from 'dotenv';

// dotenv.config();


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <AuthProvider>
    <SearchProvider> 
      <CartProvider>

      <BrowserRouter>
    <App />
     </BrowserRouter>

      </CartProvider>
    </SearchProvider>
  </AuthProvider>
 
)
