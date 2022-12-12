import React from "react";
import App from "./App";
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataProvider from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = document.getElementById('root');
render(
    <React.StrictMode>
        <DataProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<App />} />
                </Routes>
            </BrowserRouter>
        </DataProvider>
    </React.StrictMode>,root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//
// import React from 'react'; import ReactDOM from 'react-dom/client'; <- This import is only for React version 18import { render } from 'react-dom'; // <- This is the correct import // statement for React version 17import './index.css';import App from './App';import reportWebVitals from './reportWebVitals';// const root = //ReactDOM.createRoot(document.getElementById('root'));const root = document.getElementById('root'); // <- This is the //correct method call for React version 17render(  <React.StrictMode>    <App />  </React.StrictMode>,  root);