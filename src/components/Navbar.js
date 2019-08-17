import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import logoImg from '../images/logo_black.png';
import { desktopOnly } from '../utils';
import theme from '../theme';

const Navbar = () => {
  const [dropmenuOpen, setDropmenuOpen] = React.useState(false);

  const activeStyle = {
    fontWeight: 700,
    borderColor: theme.primary[600],
  };

  return (
    <Nav>
      <NavLink to="/" activeStyle={activeStyle}>
        <Logo src={logoImg} />
      </NavLink>

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

      <NavLink to="/ota-yhteytta" activeStyle={activeStyle}>
        Ota yhteyttä
      </NavLink>
    </Nav>
  );
};

const Nav = styled.nav`
  font-family: 'Cinzel', serif;
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1;
  backdrop-filter: blur(5px);
  ${desktopOnly}
`;

const NavLink = styled(Link)`
  flex: 1;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${props => props.theme.black};
  border-bottom: 4px solid transparent;
  position: relative;

  &:hover {
    border-color: ${props => props.theme.primary[400]};
  }
`;

const Logo = styled.img`
  height: 24px;
  width: auto;
`;

const ARROW_HEIGHT = 8;

const Dropmenu = styled.div`
  position: absolute;
  top: 50px;
  left: 0px;
  right: 0px;
  padding-top: ${ARROW_HEIGHT}px;
`;

const DropmenuContent = styled.div`
  background-color: #fff;
  border-radius: 8px;
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
    background-color: ${props => props.theme.primary[100]};
  }

  &:active {
    background-color: ${props => props.theme.primary[200]};
  }
`;

export default Navbar;
