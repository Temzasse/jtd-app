import React from 'react';
import styled from '@emotion/styled';

import logoImg from '../images/logo_black.png';
import Layout from './Layout';
import Text from './Text';
import Gutter from './Gutter';

const Footer = () => (
  <Wrapper>
    <h1>Ota yhteyttä</h1>
    <Layout dir={{ sm: 'col' }}>
      <Layout.Box>
        <Layout dir="col">
          <Text>Johanna Syvälahti-Taskula</Text>
          <Text>Sisustussuunnittelija</Text>
          <Text>044-2370181</Text>
          <Text>info@johannataskula.fi</Text>
        </Layout>
      </Layout.Box>

      <Gutter sm={{ dir: 'vertical', amount: 32 }} />

      <Layout.Box>
        <Layout dir="col">
          <h2>Interior Design</h2>
          <h3>Johanna Taskula</h3>
          <Logo src={logoImg} />
        </Layout>
      </Layout.Box>
    </Layout>
  </Wrapper>
);

const Wrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const Logo = styled.img`
  height: auto;
  width: 200px;
`;

export default Footer;
