// External Dependencies
// import PropTypes from 'prop-types';
import React from 'react';
import {
  // BrowserRouter as Router,
  // Route,
  Link
} from 'react-router-dom';

// Local Variables
const rootStyles = {
  backgroundColor: 'white',
  width: '100%',
  position: 'fixed',
  zIndex: 1000,
};

const rightContainerStyles = {
  alignItems: 'center',
  display: 'flex',
  minWidth: 512,
};

// Component Definition
const TopNav = () => {
  const navLinks = (
    <div style={rightContainerStyles}>
      <Link to="Work">Work</Link>
      <Link to="About">About</Link>
      <Link to="Contact">Contact</Link>
    </div>
  );

  return (
    <section style={rootStyles}>
      <nav>
        {navLinks}
      </nav>
    </section>
  );
};

export default TopNav;
