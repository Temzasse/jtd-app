import React from 'react';
import styled from '@emotion/styled';
import { globalHistory } from '@reach/router';

import logoImg from '../images/logo_white_black_bg.png';
import { media } from '../utils';
import theme from '../theme';
import Layout from './Layout';
import Text from './Text';
import Gutter from './Gutter';
import Heading from './Heading';
import { WaveDown } from './Wave';

const Footer = () => {
  const path = globalHistory.location.pathname;
  const waveColor = path === '/' ? theme.primary[300] : theme.white;
  return (
    <Wrapper>
      <WaveDown color={waveColor} />

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
              <BrandHeading2>Johanna Taskula</BrandHeading2>
              <Gutter dir="vertical" />
              <Logo src={logoImg} />
            </Layout>
          </Layout.Box>
        </Layout>
      </FooterContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${props => props.theme.black};
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

const BrandHeading = styled.h3`
  font-size: 20px;
  font-family: 'Cinzel', serif;
  margin: 0;
  font-weight: 400;
  color: #fff;
`;

const BrandHeading2 = styled.h3`
  font-size: 24px;
  margin: 0;
  font-weight: 700;
  color: #fff;
`;

const EmailLink = styled.a`
  color: #fff;
`;

export default Footer;
