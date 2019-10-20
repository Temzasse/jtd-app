import React from 'react';
import styled from '@emotion/styled';
import { FiInstagram, FiFacebook } from 'react-icons/fi';

import logoImg from '../images/logo_white_black_bg.png';
import { media } from '../utils';
import Layout from './Layout';
import Text from './Text';
import Gutter from './Gutter';

const Footer = () => {
  return (
    <Wrapper>
      <FooterContent>
        <FooterHeading id="ota-yhteytta">Ota yhteyttä</FooterHeading>

        <Gutter dir="vertical" amount={60} sm={{ amount: 32 }} />

        <Layout dir={{ sm: 'col' }} align={{ sm: 'center' }}>
          <Layout.Box>
            <Layout dir="col" align="center">
              <Text weight={500} size={18}>
                Johanna Taskula
              </Text>
              <Text weight={500} size={18}>
                Sisustussuunnittelija
              </Text>
              <Text weight={500} size={18}>
                <MediaLink href="tel:044-2370181">044-2370181</MediaLink>
              </Text>
              <Text weight={500} size={18}>
                <MediaLink
                  href="mailto:info@johannataskula.fi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  info@johannataskula.fi
                </MediaLink>
              </Text>
            </Layout>
          </Layout.Box>

          <Gutter sm={{ dir: 'vertical', amount: 40 }} />

          <Layout.Box>
            <Layout dir="col" align="center" justify="center">
              <BrandHeading>Interior Design</BrandHeading>
              <Gutter dir="vertical" amount={8} />
              <BrandHeading2>Johanna Taskula</BrandHeading2>
              <Gutter dir="vertical" />
              <Logo src={logoImg} />
            </Layout>
          </Layout.Box>
        </Layout>

        <Gutter dir="vertical" amount={40} />

        <Layout justify="center">
          <SocialLink
            href="https://www.instagram.com/johannataskula/?hl=fi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram />
          </SocialLink>
          <SocialLink
            href="https://www.facebook.com/Interior-Design-Johanna-Taskula-344118646068633/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiFacebook />
          </SocialLink>
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
  background-color: ${props => props.theme.primary[300]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterHeading = styled.h4`
  font-size: 48px;
  font-weight: 200;
  color: ${props => props.theme.black};
  text-align: center;
  margin: 0;
  letter-spacing: 1.5px;

  ${media.sm`
    font-size: 32px;
  `}
`;

const FooterContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  flex: 1;
`;

const Logo = styled.img`
  height: auto;
  width: 80px;
`;

const BrandHeading = styled.h3`
  font-size: 20px;
  margin: 0;
  font-weight: 200;
  color: ${props => props.theme.black};
  text-transform: uppercase;
`;

const BrandHeading2 = styled.h3`
  font-size: 24px;
  margin: 0;
  font-weight: 200;
  color: ${props => props.theme.black};
  text-transform: uppercase;
`;

const MediaLink = styled.a`
  color: ${props => props.theme.black};
`;

const SocialLink = styled.a`
  text-decoration: none;
  font-size: 40px;
  color: ${props => props.theme.primary[700]};
  background-color: ${props => props.theme.primary[200]};
  height: 56px;
  width: 56px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 16px;
  transition: transform 100ms ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.1);
  }
`;

export default Footer;
