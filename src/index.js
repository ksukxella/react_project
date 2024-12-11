
import React from 'react';
import store from './components/redux/redux-store';
// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";


  ReactDOM.render ( <BrowserRouter>
       <Provider store={store}><App/></Provider></BrowserRouter>,
   document.getElementById('root'));
  
  
