import React from 'react';
import styled from '@emotion/styled';

import logoImg from '../images/logo_white_black_bg.png';
import theme from '../theme';
import Layout from './Layout';
import Text from './Text';
import Gutter from './Gutter';
import Heading from './Heading';

const Footer = () => {
  return (
    <Wrapper>
      <FooterContent>
        <FooterHeading id="ota-yhteytta">Ota yhteyttä</FooterHeading>

        <Gutter dir="vertical" amount={60} />

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
                044-2370181
              </Text>
              <Text weight={500} size={18}>
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
              <Gutter dir="vertical" amount={8} />
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

const EmailLink = styled.a`
  color: ${props => props.theme.black};
`;

export default Footer;
