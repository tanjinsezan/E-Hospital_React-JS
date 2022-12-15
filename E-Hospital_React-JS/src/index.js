import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import PHeader from './Components/Header';
import Patient from './Components/Patient';
import Footer from './Components/Footer';
import App from './App';
import Login from './Components/Login';
import LogOut from './Components/LogOut';
import reportWebVitals from './reportWebVitals';
import Registration from './Components/Registration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
     
      <Routes>

      <Route exact path='/Home' element={<Home />} />
      <Route exact path='/Registration' element={<Registration />} />
      <Route exact path='/Login' element={<Login/>} />
      <Route exact path='/Patient' element={<Patient/>} />
      <Route exact path='/LogOut' element={<LogOut/>} />
      </Routes>
   
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
