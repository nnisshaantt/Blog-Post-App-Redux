import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from '../src/redux/store';
import {BrowserRouter} from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import ShowBlog from '../src/Components/showBlog/showBlog';
import Home from '../src/Components/home/home';
import AddBlog from '../src/Components/addBlog/addBlog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider store={store}>
            <BrowserRouter>
                  <Routes>
                        <Route path="/showBlog/:id" element={<ShowBlog />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/addBlog" element={<AddBlog />} />
                  </Routes>
            </BrowserRouter>
      </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
