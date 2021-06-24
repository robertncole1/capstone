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
    <>
      <NavItem>
        <Link className="nav-link" id="that" to="/collection">My Collection</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" id="that" to="/gear">Gear</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" id="that" to="/add-gear">Add Gear</Link>
      </NavItem>
    </>
  );
  return (
    <div>
      <Navbar expand="md">
        <NavbarBrand href="/">
        <img className="navbar-logo" src="https://firebasestorage.googleapis.com/v0/b/nss-capstone-28099.appspot.com/o/logo-capstone-white.png?alt=media&token=76d3d139-a219-4152-8533-db56548c04f3"/>
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
                      ? <Button className='sign-out' onClick={signOutUser}>Logout</Button>
                      : <Button className='sign-in' onClick={signInUser}>Sign In</Button>
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
