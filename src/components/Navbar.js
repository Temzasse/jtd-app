import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import logoImg from '../images/logo_black.png';
import { desktopOnly } from '../utils';

const Navbar = () => (
  <Nav>
    <NavItem to="/">
      <Logo src={logoImg} />
    </NavItem>
    <NavItem to="/palvelut">Palvelut</NavItem>
    <NavItem to="/galleria">Galleria</NavItem>
    <NavItem to="/ota-yhteytta">Ota yhteyttä</NavItem>
  </Nav>
);

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.primary[300]};
  z-index: 1;
  ${desktopOnly}
`;

const NavItem = styled(Link)`
  flex: 1;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${props => props.theme.black};
`;

const Logo = styled.img`
  height: 24px;
  width: auto;
`;

export default Navbar;
