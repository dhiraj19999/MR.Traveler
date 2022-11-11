import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import AppcontextProvider from './Context/Auth';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AppcontextProvider>
<ChakraProvider>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </ChakraProvider>
    </AppcontextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
