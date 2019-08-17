import React from 'react';
import styled from '@emotion/styled';

import logoImg from '../images/logo_white_black_bg.png';
import { media } from '../utils';
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

      <Gutter dir="vertical" amount={60} />

      <Layout dir={{ sm: 'col' }} align={{ sm: 'center' }}>
        <Layout.Box>
          <Layout dir="col" align="center">
            <Text weight={500} size={18} color="#fff">
              Johanna Syvälahti-Taskula
            </Text>
            <Text weight={500} size={18} color="#fff">
              Sisustussuunnittelija
            </Text>
            <Text weight={500} size={18} color="#fff">
              044-2370181
            </Text>
            <Text weight={500} size={18} color="#fff">
              <EmailLink
                href="mailto:info@johannataskula.fi"
                target="_blank"
                rel="noopener noreferrer"
              >
                info@johannataskula.fi
              </EmailLink>
            </Text>
          </Layout>
        </Layout.Box>

        <Gutter sm={{ dir: 'vertical', amount: 32 }} />

        <Layout.Box>
          <Layout dir="col" align="center" justify="center">
            <BrandHeading>Interior Design</BrandHeading>
            <BrandHeading>Johanna Taskula</BrandHeading>
            <Gutter dir="vertical" />
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
  background-color: ${props => props.theme.primary[600]};
  padding: 250px 0px 150px 0px;
  margin-top: 10px;

  ${media.sm`
    padding: 120px 0px 40px 0px;
  `}

  ${media.lg`
    padding: 300px 0px 150px 0px;
  `}
`;

const FooterContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const Logo = styled.img`
  height: auto;
  width: 120px;
`;

const Svg = styled.svg`
  position: absolute;
  top: -10px;
  left: 0;
  right: 0;
`;

const BrandHeading = styled.h3`
  font-size: 24px;
  font-family: 'Cinzel', serif;
  margin: 0;
  font-weight: 400;
  color: #fff;
`;

const EmailLink = styled.a`
  color: #fff;
`;

export default Footer;
