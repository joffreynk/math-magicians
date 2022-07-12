import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <h1>Math Magicians</h1>
    <nav>
      <Link to="/">Home</Link>
      {' '}
      |
      {' '}
      <Link to="calcuator">Calculator</Link>
      {' '}
      |
      {' '}
      <Link to="quotes">Quotes</Link>
    </nav>
  </div>
);

export default Header;
