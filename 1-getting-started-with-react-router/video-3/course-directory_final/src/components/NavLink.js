import React from 'react';
import { Link } from 'react-router';

const NavLink = () => (
  <Link {...props} activeClassName="active" />
);


export default NavLink;
