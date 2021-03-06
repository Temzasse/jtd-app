import React from 'react';
import styled from '@emotion/styled';
import { media } from '../utils';

const Section = ({ children, h, bg, ...rest }) => (
  <Wrapper h={h} bg={bg} {...rest}>
    <Content>{children}</Content>
  </Wrapper>
);

const Wrapper = styled.section`
  width: 100%;
  min-height: ${props => props.h || '100vh'};
  background-color: ${props => props.bg};
  display: flex;
  overflow: hidden;
`;

const Content = styled.div`
  flex: 1;
  padding: 60px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  ${media.sm`
    padding: 40px 16px;
  `}
`;

export default Section;
