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
        <Link className="nav-link" id="that" to="/collection">Collection</Link>
      </NavItem>
  </>
  );
  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand href="/">Sound Selection</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          <NavItem>
            <Link className="nav-link" id="that" to="/search">Search</Link>
         </NavItem>
          {user && authenticated()}
          <NavItem>
              {
                user !== null
                && <NavItem>
                  {
                    user
                      ? <Button className='nav-link' color='link' onClick={signOutUser}>Logout</Button>
                      : <Button className='nav-link' color='link' onClick={signInUser}>Sign In</Button>
                  }
                </NavItem>
              }
            </NavItem>
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
