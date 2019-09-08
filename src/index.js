import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// imported BrowserRouter as Router
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Router>
  <App />
  </Router>,
  document.getElementById('root'));
// wrapped App component inside Router component