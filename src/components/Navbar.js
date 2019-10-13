import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import logoImg from '../images/logo_black.png';
import { desktopOnly } from '../utils';

const Navbar = () => {
  const activeStyle = { fontWeight: 700 };

  return (
    <Nav>
      <NavLink to="/" activeStyle={activeStyle}>
        <LogoWrapper>
          <Logo src={logoImg} />
        </LogoWrapper>
      </NavLink>

      <div style={{ flex: 1 }} />

      <NavLink to="/palvelut-yksityisille" activeStyle={activeStyle}>
        Yksityisille
      </NavLink>

      <NavLink to="/palvelut-yrityksille" activeStyle={activeStyle}>
        Yrityksille
      </NavLink>

      <NavLink to="/galleria" activeStyle={activeStyle}>
        Galleria
      </NavLink>

      <NavLink to="/#ota-yhteytta" activeStyle={activeStyle}>
        Ota yhteyttä
      </NavLink>
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
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.4) 100%
  );
  background-color: rgba(0, 0, 0, 0.05);
  z-index: 1;
  ${desktopOnly}
`;

const LogoWrapper = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.white};
`;

const NavLink = styled(Link)`
  flex: none;
  margin: 0px 24px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${props => props.theme.white};
  position: relative;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1.5px;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    text-decoration: underline;
  }
`;

const Logo = styled.img`
  width: 24px;
  height: auto;
`;

export default Navbar;
