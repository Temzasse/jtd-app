import React from 'react';
import styled from '@emotion/styled';

import logoImg from '../images/logo_black.png';
import Layout from './Layout';
import Text from './Text';
import Gutter from './Gutter';
import Heading from './Heading';

const Footer = () => (
  <Wrapper>
    <Svg viewBox="0 0 580 150">
      <path
        d="m-0.5,-1.5625l0.5,62.5625c0.5,0.4375 30.5,20.4375 54.5,14.4375c24,-6 12,-34 55,-18c43,16 96,53 172,29c76,-24 118,-50 181,-46c63,4 117,44 116.5,43.5625c0.5,0.4375 1.5,-84.5625 1,-84l-580.5,-1.5625z"
        fill="#fff"
      />
    </Svg>

    <FooterContent>
      <Heading color="#fff" align="center">
        Ota yhteyttä
      </Heading>

      <Gutter dir="vertical" amount={32} />

      <Layout dir={{ sm: 'col' }}>
        <Layout.Box>
          <Layout dir="col">
            <Text color="#fff">Johanna Syvälahti-Taskula</Text>
            <Text color="#fff">Sisustussuunnittelija</Text>
            <Text color="#fff">044-2370181</Text>
            <Text color="#fff">info@johannataskula.fi</Text>
          </Layout>
        </Layout.Box>

        <Gutter sm={{ dir: 'vertical', amount: 32 }} />

        <Layout.Box>
          <Layout dir="col">
            <Heading as="h2" color="#fff" align="center">
              Interior Design
            </Heading>
            <Heading as="h3" color="#fff" align="center">
              Johanna Taskula
            </Heading>
            <Logo src={logoImg} />
          </Layout>
        </Layout.Box>
      </Layout>
    </FooterContent>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${props => props.theme.black};
  padding: 300px 0px 200px 0px;
  margin-top: 10px;
`;

const FooterContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const Logo = styled.img`
  height: auto;
  width: 200px;
`;

const Svg = styled.svg`
  position: absolute;
  top: -10px;
  left: 0;
  right: 0;
`;

export default Footer;
