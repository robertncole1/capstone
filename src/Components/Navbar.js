import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const authenticated = () => (
      <NavItem>
        <Link className="nav-link" id="that" to="/collection">My Collection</Link>
      </NavItem>
  );
  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand href="/">
        <img className="navbar-logo" src="https://firebasestorage.googleapis.com/v0/b/nss-capstone-28099.appspot.com/o/capstone-logo.png?alt=media&token=3598ae47-2f2d-4968-b2fb-3896c3a37b92"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link className="nav-link" id="that" to="/search">Search</Link>
            </NavItem>
          {user && authenticated()}
              {
                user !== null
                && <NavItem>
                  {
                    user
                      ? <Button className='sign-out' color='link' onClick={signOutUser}>Logout</Button>
                      : <Button className='sign-in' color='link' onClick={signInUser}>Sign In</Button>
                  }
                </NavItem>
              }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
NavBar.propTypes = {
  user: PropTypes.any
};
export default NavBar;
