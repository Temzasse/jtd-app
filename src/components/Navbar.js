import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import logoImg from '../images/logo_black.png';
import { desktopOnly, isTouchDevice, noop, useOnClickOutside } from '../utils';

const Navbar = () => {
  const dropmenuRef = React.useRef();
  const [dropmenuOpen, setDropmenuOpen] = React.useState(false);
  const touchEnabled = isTouchDevice();
  const activeStyle = { fontWeight: 700 };

  const handleDropmenuMouseEnter = () => setDropmenuOpen(true);
  const handleDropmenuMouseLeave = () => setDropmenuOpen(false);

  const handleDropmenuClick = event => {
    event.preventDefault();
    if (touchEnabled) setDropmenuOpen(x => !x); // handle tablets
  };

  useOnClickOutside(dropmenuRef, () => setDropmenuOpen(false));

  return (
    <Nav>
      <NavLink to="/" activeStyle={activeStyle}>
        <LogoWrapper>
          <Logo src={logoImg} />
        </LogoWrapper>
      </NavLink>

      <Flexer />

      <DropmenuWrapper
        ref={dropmenuRef}
        onMouseEnter={touchEnabled ? noop : handleDropmenuMouseEnter}
        onMouseLeave={touchEnabled ? noop : handleDropmenuMouseLeave}
      >
        <NavLink
          to="/palvelut"
          partiallyActive
          disableUnderline
          activeStyle={activeStyle}
          onClick={handleDropmenuClick}
          style={{ margin: 0 }}
        >
          Sisustussuunnittelu
        </NavLink>

        {dropmenuOpen && (
          <Dropmenu>
            <DropmenuContent>
              <DropmenuItem to="/palvelut-yksityisille">
                Palvelut yksityisille
              </DropmenuItem>
              <DropmenuItem to="/palvelut-yrityksille">
                Palvelut yrityksille
              </DropmenuItem>
            </DropmenuContent>
          </Dropmenu>
        )}
      </DropmenuWrapper>

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

const Flexer = styled.div`
  flex: 1;
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
  margin: 0px 24px;
  flex: none;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${props => props.theme.white};
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1.5px;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    text-decoration: ${props =>
      props.disableUnderline ? 'none' : 'underline'};
  }
`;

const DropmenuWrapper = styled.div`
  margin: 0px 24px;
  position: relative;
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
  width: 230px;
  transform: translateX(-50%);
`;

const DropmenuContent = styled.div`
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2), 0px -4px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &:after {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-bottom: ${ARROW_HEIGHT}px solid;
    border-left: ${ARROW_HEIGHT}px solid transparent;
    border-right: ${ARROW_HEIGHT}px solid transparent;
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
  text-shadow: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default Navbar;
