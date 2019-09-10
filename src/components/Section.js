import React from 'react';
import styled from '@emotion/styled';
import { media } from '../utils';

const Section = ({ children, h, bg, padd, ...rest }) => (
  <Wrapper h={h} bg={bg} {...rest}>
    <Content padd={padd}>{children}</Content>
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
  padding: ${props => props.padd || '60px'};
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  ${media.sm`
    padding: 32px 24px;
  `}
`;

export default Section;
