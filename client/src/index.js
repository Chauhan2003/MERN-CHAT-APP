import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChatProvider from './context/ChatProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChatProvider>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar
      newestOnTop
      closeOnClick
      pauseOnFocusLoss={false}
      pauseOnHover
      theme="dark"
    />
  </ChatProvider>
);