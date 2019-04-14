import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import logoImg from '../images/logo_black.png';
import { desktopOnly } from '../utils';
import theme from '../theme';

const Navbar = () => {
  const activeStyle = {
    fontWeight: 900,
    color: theme.primary[900],
    borderColor: theme.primary[900],
  };

  return (
    <Nav>
      <NavItem to="/" activeStyle={activeStyle}>
        <Logo src={logoImg} />
      </NavItem>
      <NavItem to="/palvelut" activeStyle={activeStyle}>
        Palvelut
      </NavItem>
      <NavItem to="/galleria" activeStyle={activeStyle}>
        Galleria
      </NavItem>
      <NavItem to="/ota-yhteytta" activeStyle={activeStyle}>
        Ota yhteyttä
      </NavItem>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.primary[500]};
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
  color: ${props => props.theme.primary[900]};
  border-bottom: 4px solid ${props => props.theme.primary[500]};

  &:hover {
    border-bottom: 4px solid ${props => props.theme.primary[700]};
  }
`;

const Logo = styled.img`
  height: 24px;
  width: auto;
`;

export default Navbar;
