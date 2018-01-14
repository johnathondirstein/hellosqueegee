import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/App.css';

const NotFound = () => (
  <div>
    404 - <Link to="/">Go Home</Link>
  </div>
);

export default NotFound;