import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { media } from '../utils';
import { keyframes } from '@emotion/core';

const PageHeader = ({ img, title, children }) => {
  return (
    <Wrapper>
      <HeaderImage fluid={img} objectPosition="0% 50%" />

      {title && (
        <TitleWrapper>
          <Title>
            <TitleText>{title}</TitleText>
            <TitleBg />
          </Title>
        </TitleWrapper>
      )}

      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const TitleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const revealAnim = keyframes`
 from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;

const textRevealAnim = keyframes`
 from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const Title = styled.div`
  text-align: center;
  padding: 8px 24px;
  position: relative;
  background-color: transparent;
  z-index: 1;
  overflow: hidden;
`;

const TitleText = styled.h1`
  margin: 0;
  font-size: 60px;
  font-weight: 200;
  color: ${props => props.theme.black};
  opacity: 0;
  animation: ${textRevealAnim} 200ms ease-in-out forwards 300ms;
  font-family: 'Montserrat', sans-serif;

  ${media.sm`
    font-size: 40px;
  `}
`;

const TitleBg = styled.div`
  background-color: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
  transform-origin: top left;
  transform: scaleX(0);
  animation: ${revealAnim} 200ms cubic-bezier(0.98, 0.63, 0, 0.97) forwards
    200ms;
`;

const HeaderImage = styled(Image)`
  height: 100vh;
`;

export default PageHeader;
