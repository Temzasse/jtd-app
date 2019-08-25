import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import logoImg from '../images/logo_black.png';
import { desktopOnly } from '../utils';

const Navbar = () => {
  const [dropmenuOpen, setDropmenuOpen] = React.useState(false);

  const activeStyle = {
    fontWeight: 700,
  };

  return (
    <Nav>
      <NavLink to="/" activeStyle={activeStyle}>
        <LogoWrapper>
          <Logo src={logoImg} />
        </LogoWrapper>
      </NavLink>

      <div style={{ flex: 1 }} />

      <NavLink
        to="/palvelut"
        partiallyActive
        activeStyle={activeStyle}
        onMouseEnter={() => setDropmenuOpen(true)}
        onMouseLeave={() => setDropmenuOpen(false)}
      >
        Palvelut
        {dropmenuOpen && (
          <Dropmenu>
            <DropmenuContent>
              <DropmenuItem to="/palvelut/yksityisille">
                Yksityisille
              </DropmenuItem>
              <DropmenuItem to="/palvelut/yrityksille">
                Yrityksille
              </DropmenuItem>
            </DropmenuContent>
          </Dropmenu>
        )}
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
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.6) 100%
  );
  z-index: 1;
  ${desktopOnly}
`;

const LogoWrapper = styled.div`
  height: 40px;
  width: 40px;
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

  &:hover {
    font-weight: 700;
  }
`;

const Logo = styled.img`
  width: 24px;
  height: auto;
`;

const ARROW_HEIGHT = 8;

const Dropmenu = styled.div`
  position: absolute;
  top: 50px;
  left: 50%;
  right: 0px;
  padding-top: ${ARROW_HEIGHT}px;
  width: 200px;
  transform: translateX(-50%);
`;

const DropmenuContent = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2), 0px -4px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &:after {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-bottom: ${`${ARROW_HEIGHT}px solid`};
    border-left: ${`${ARROW_HEIGHT}px solid transparent`};
    border-right: ${`${ARROW_HEIGHT}px solid transparent`};
    border-bottom-color: #fff;
    left: ${`calc(50% - ${ARROW_HEIGHT}px)`};
    top: 0px;
  }
`;

const DropmenuItem = styled(Link)`
  padding: 12px 16px;
  text-decoration: none;
  color: ${props => props.theme.primary[900]};
  font-weight: 400;
  border: none;
  text-align: center;

  &:hover {
    font-weight: 700;
  }
`;

export default Navbar;
