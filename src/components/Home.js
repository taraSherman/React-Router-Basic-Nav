import React from 'react';
import { Link } from 'react-router-dom';
// imported Link component
const Home = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
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
// set up 'Link to' About and Contact routes
export default Home;
