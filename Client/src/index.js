import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import { Toaster } from 'react-hot-toast';

import 'antd/dist/reset.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
const CLIENT_ID = "890247454323-6s10b2bvdbc8d9is71vdhks8s1u2ad10.apps.googleusercontent.com";
console.log(CLIENT_ID);
root.render(
  <AuthProvider>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
    <Toaster />

  </AuthProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
