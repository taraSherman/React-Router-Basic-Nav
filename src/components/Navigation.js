import React from 'react';
import { Link } from 'react-router-dom';
// imported Link component
const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to="">Home</Link>
        </div>
        <div>
          <Link to="/About">About</Link>
        </div>
        <div>
          <Link to="/Contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};
// set up routes
export default Navigation;
