import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { media } from '../utils';

const PageHeader = ({ img, title, children }) => {
  return (
    <Wrapper>
      <HeaderImage fluid={img} />

      {title && (
        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
      )}

      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 10px;
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

const Title = styled.h1`
  margin: 0;
  font-size: 60px;
  font-weight: 900;
  color: ${props => props.theme.black};
  transform: translateY(-60px);
  text-align: center;
  background: #ffffff;
  padding: 8px 24px;

  ${media.sm`
    font-size: 48px;
  `}
`;

const HeaderImage = styled(Image)`
  height: 100vh;
`;

export default PageHeader;
