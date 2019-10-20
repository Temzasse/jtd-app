import React from 'react';
import { navigate } from 'gatsby';
import styled from '@emotion/styled';
import { FiMenu } from 'react-icons/fi';

import {
  IoIosImages,
  IoIosHelpCircle,
  IoMdRose,
  IoIosBriefcase,
} from 'react-icons/io';

import logoImg from '../images/logo_black.png';
import { mobileOnly, IS_BROWSER } from '../utils';
import Gutter from './Gutter';

const MENU_WIDTH = IS_BROWSER ? Math.min(360, window.innerWidth * 0.8) : 360;
const MENU_CLOSE_MS = 400;

const Drawer = () => {
  const [isOpen, setOpen] = React.useState(false);

  const navigateDelayed = to => {
    setOpen(false);
    setTimeout(() => navigate(to), MENU_CLOSE_MS);
  };

  return (
    <>
      <MenuButton onClick={() => setOpen(true)}>
        <FiMenu size={24} />
      </MenuButton>

      <Backdrop isVisible={isOpen} onClick={() => setOpen(false)} />

      <Menu isOpen={isOpen}>
        <MenuItem onClick={() => navigateDelayed('/')}>
          <Logo src={logoImg} />
          <Gutter />
          Etusivu
        </MenuItem>

        <MenuItem onClick={() => navigateDelayed('/palvelut-yksityisille')}>
          <IoMdRose size={30} />
          <Gutter />
          Palvelut yksityisille
        </MenuItem>

        <MenuItem onClick={() => navigateDelayed('/palvelut-yrityksille')}>
          <IoIosBriefcase size={30} />
          <Gutter />
          Palvelut yrityksille
        </MenuItem>

        <MenuItem onClick={() => navigateDelayed('/galleria')}>
          <IoIosImages size={30} />
          <Gutter />
          Galleria
        </MenuItem>

        <MenuItem onClick={() => navigateDelayed('/#ota-yhteytta')}>
          <IoIosHelpCircle size={30} />
          <Gutter />
          Ota yhteyttä
        </MenuItem>
      </Menu>
    </>
  );
};

const Backdrop = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 99;
  transition: opacity 0.3s ease-in;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  pointer-events: ${props => (props.isVisible ? 'auto' : 'none')};
  ${mobileOnly};
`;

const Menu = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  bottom: 0;
  left: 0;
  width: ${MENU_WIDTH}px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.5);
  will-change: transform;
  transform: translateX(${props => (props.isOpen ? 0 : -MENU_WIDTH - 10)}px);
  transition: transform ${MENU_CLOSE_MS}ms cubic-bezier(0.2, 0.71, 0.14, 0.91);
  background-color: #fff;
  ${mobileOnly};
`;

const MenuItem = styled.div`
  font-size: 18px;
  padding: 16px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.grey[200]};

  &:active {
    background-color: ${props => props.theme.primary[200]};
  }
`;

const MenuButton = styled.button`
  position: fixed;
  z-index: 1;
  top: 8px;
  left: 8px;
  border: none;
  padding: 0;
  background-color: #fff;
  border-radius: 50%;
  height: 48px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  transition: background-color 0.2s ease;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  &:active {
    background-color: #ddd;
  }

  ${mobileOnly};
`;

const Logo = styled.img`
  height: 24px;
  width: auto;
`;

export default Drawer;
