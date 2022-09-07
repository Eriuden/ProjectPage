import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import thunk from "redux-thunk"
import reducers from './redux/reducers/IndexReducer';
import {applyMiddleware} from "@reduxjs/toolkit"
import { configureStore } from '@reduxjs/toolkit';
import { getAllUsers } from './redux/actions/user.action';
import { getAllProjects } from './redux/actions/project.action';
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))
const store = configureStore({reducer:reducers}, composedEnhancer)

store.dispatch(getAllProjects())
store.dispatch(getAllUsers())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>  
  </React.StrictMode>
);



reportWebVitals();
