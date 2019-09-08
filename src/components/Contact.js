import React from 'react';
import { Link } from 'react-router-dom';
// imported Link component
const Contact = () => {
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
      </div>
    </div>
  );
};
// set up 'Link to' for Home and About routes
export default Contact;
