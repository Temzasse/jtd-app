import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { media } from '../utils';

const Header = ({ img, title }) => {
  return (
    <Wrapper>
      <Img fluid={img} />

      <Svg viewBox="0 0 580 150">
        <g>
          <path d="m-0.74337,0.32227" fill="#fff" />
          <path d="m-0.00262,-0.23216l150.37435,85.41812" fill="#fff" />
          <path d="m580.00262,149.39882" fill="#fff" />
          <path
            d="m0.39738,-0.16254c2.50263,1.41735 22.96317,79.58383 87.4082,76.60627c64.44502,-2.97757 77.77848,-55.8293 137.77902,-40.94149c60.00054,14.88781 64.44503,55.08492 118.51959,50.61857c54.07456,-4.46634 102.22315,-40.94149 148.14949,-36.47514c45.92634,4.46634 86.67268,53.31834 87.41081,53.82943c0.73813,0.51109 0.00262,45.64114 0.74075,46.15223c0.73813,0.51109 -580.00262,0.23331 -580.00524,0.74439l-0.00262,-150.37172z"
            fill="#fff"
          />
        </g>
      </Svg>

      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
    </Wrapper>
  );
};

const TitleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
`;

const Title = styled.h1`
  margin: 0;
  font-size: 80px;
  font-weight: 900;
  text-shadow: 0px 2px 32px rgba(255, 255, 255, 0.8);
  color: ${props => props.theme.black};
  transform: translateY(-32px);

  ${media.sm`
    font-size: 48px;
  `}
`;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 10px;
`;

const Svg = styled.svg`
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
`;

export default Header;