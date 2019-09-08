import React from 'react';
import { Route } from 'react-router-dom';
// imported Route component
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Route exact path='/' component={Home} />
    <Route path='/About' component={About} />
    <Route path='/Contact' component={Contact} />
    <Route path='/Navigation' component={Navigation} />
  </div>
);
// set up routes to components
export default App;
