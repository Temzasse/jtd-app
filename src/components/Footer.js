import React from 'react';
import styled from '@emotion/styled';

import logoImg from '../images/logo_white_black_bg.png';
import { media } from '../utils';
import Layout from './Layout';
import Text from './Text';
import Gutter from './Gutter';
import Heading from './Heading';

const Footer = () => {
  return (
    <Wrapper>
      <FooterContent>
        <Heading as="h2" color="#fff" align="center" id="ota-yhteytta">
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
  height: 80vh;
  min-height: 200px;
  background-color: ${props => props.theme.black};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  flex: 1;
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
