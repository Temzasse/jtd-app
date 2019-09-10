import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import { FiArrowRight } from 'react-icons/fi';

import theme from '../theme';
import { getArrData, media } from '../utils';
import Page from '../components/Page';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Gutter from '../components/Gutter';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import SubHeading from '../components/SubHeading';

export default ({ data }) => {
  const galleryItems = getArrData(data);

  return (
    <Page>
      <SEO />

      <PageHeader img={data.headerImg.childImageSharp.fluid}>
        <HeaderWrapper>
          <SecondaryHeading>Interior design</SecondaryHeading>
          <Gutter dir="vertical" />
          <MainHeading>Johanna Taskula</MainHeading>
        </HeaderWrapper>
      </PageHeader>

      <Section bg="#fff" h="auto" padd="60px 60px 0px 60px">
        <Layout dir={{ sm: 'col' }}>
          <Layout.Box flex="1">
            <IntoText>
              Kodin pitäisi olla paikka, missä tunnet iloa ja onnea. Kodissa
              vallitseva tunnelma heijastaa siellä asuvien ihmisten elämää ja
              rakkautta. Persoonalliset yksityiskohdat, rakkaat esineet ja
              mielenkiintoiset ratkaisut tekevät kodista sielukkaan ja asujiensa
              näköisen.
            </IntoText>
          </Layout.Box>
          <Layout.Box flex="none">
            <Profile fixed={data.profileImg.childImageSharp.fixed} />
          </Layout.Box>
        </Layout>
      </Section>

      <Section bg={theme.black}>
        <SectionHeading color={theme.white}>Palvelut</SectionHeading>
        <SubHeading color={theme.white}>Ratkaisut sisustuspulmiisi</SubHeading>

        <Gutter dir="vertical" amount={40} />

        <Layout dir={{ sm: 'col' }}>
          <Layout.Box>
            <Card>
              <CardImage fluid={data.cardImg1.childImageSharp.fluid} />
              <CardContent>
                <CardTitle>Yksityisille</CardTitle>
                <p>
                  Tarjoan sisustus -ja tilasuunnittelua yksityiskoteihin,
                  uudiskohteisiin ja vapaa-ajan asuntoihin asiakkaan toiveet
                  huomioiden. Kotien suunnittelussa on tärkeintä, että
                  lopputuloksena on persoonallinen, juuri sinulle suunniteltu
                  koti. Palveluihin kuuluu sisustussuunnittelu ja konsultointi.
                </p>
              </CardContent>
              <CardFooter>
                <ReadMoreButton to="/palvelut#yksityisille" />
              </CardFooter>
            </Card>
          </Layout.Box>

          <Gutter sm={{ dir: 'vertical' }} amount={32} />

          <Layout.Box>
            <Card>
              <CardImage fluid={data.cardImg2.childImageSharp.fluid} />
              <CardContent>
                <CardTitle>Yrityksille</CardTitle>
                <p>
                  Toteutan majoitustilojen, opetustilojen ja toimitilojen tila
                  -ja sisustussunnittelua. Erikoisosaamisenani ovat edustus -ja
                  majoitustilat, kuten boutique-hotellit, sekä opetustilat.
                </p>
              </CardContent>
              <CardFooter>
                <ReadMoreButton to="/palvelut#yrityksille" />
              </CardFooter>
            </Card>
          </Layout.Box>
        </Layout>
      </Section>

      <Section bg={theme.white}>
        <SectionHeading color={theme.black}>Galleria</SectionHeading>
        <SubHeading>Viimeisimmät julkaisut</SubHeading>

        <Gutter dir="vertical" amount={40} />

        <GalleryItems>
          {galleryItems.map(({ id, slug, title, previewImage }) => (
            <GalleryLink key={id} to={slug}>
              <GalleryPreview fluid={previewImage.childImageSharp.fluid} />
              <GalleryItemTitle>{title}</GalleryItemTitle>
            </GalleryLink>
          ))}
        </GalleryItems>
      </Section>
    </Page>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  padding: 120px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const MainHeading = styled.h1`
  font-size: 60px;
  text-transform: uppercase;
  font-weight: 200;
  margin: 0;
  text-align: center;

  ${media.sm`
    font-size: 32px;
  `}
`;

const SecondaryHeading = styled.h2`
  font-size: 32px;
  font-weight: 200;
  margin: 0;
  text-transform: uppercase;

  ${media.sm`
    font-size: 18px;
  `}
`;

const SectionHeading = styled.h3`
  font-size: 40px;
  font-weight: 200;
  color: ${props => props.color};
  margin: 0;
`;

const Profile = styled(Image)`
  width: 250px;
  height: auto;
  margin-bottom: -10px;
  text-align: center;
`;

const IntoText = styled.p`
  font-size: 20px;
  line-height: 1.6;
  font-style: italic;
  padding: 0px 40px;
  position: relative;

  &::before {
    content: '\x00022';
    font-family: 'Cinzel', serif;
    position: absolute;
    left: -32px;
    top: 32px;
    font-size: 150px;
    line-height: 0;
    color: ${props => props.theme.primary['400']};
  }
`;

const Card = styled.div`
  border-radius: 4px;
  background-color: ${props => props.theme.primary[300]};
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.4);
  min-height: 520px;
  display: flex;
  flex-direction: column;
`;

const CardImage = styled(Image)`
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;

const CardContent = styled.div`
  padding: 16px;
  flex: 1;
`;

const CardTitle = styled.div`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 500;
  margin: 16px 0px;
`;

const CardFooter = styled.div`
  padding: 0px 16px 16px 16px;
  display: flex;
  justify-content: flex-end;
`;

const TextButton = styled(Link)`
  color: ${props => props.theme.black};
  font-size: 18px;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  text-decoration: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const ReadMoreButton = ({ to }) => (
  <TextButton to={to}>
    Lue lisää
    <Gutter amount={4} />
    <FiArrowRight />
  </TextButton>
);

const GalleryItems = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: -16px -16px 0px -16px;

  ${media.sm`
    flex-direction: column;
  `}
`;

const GalleryLink = styled(Link)`
  flex: none;
  width: 50%;
  padding: 16px;
  color: ${props => props.theme.black};
  text-decoration: none;

  ${media.sm`
    width: 100%;
  `}
`;

const GalleryPreview = styled(Image)`
  height: 300px;
  border-radius: 2px;

  :hover {
    filter: brightness(90%);
  }

  ${media.sm`
    height: 300px;
  `}
`;

const GalleryItemTitle = styled.h2`
  font-weight: 500;
  font-size: 20px;
`;

export const query = graphql`
  query {
    headerImg: file(relativePath: { eq: "landing_page_header1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    profileImg: file(relativePath: { eq: "profile.png" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    cardImg1: file(relativePath: { eq: "services_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    cardImg2: file(relativePath: { eq: "services_2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "galleryItem" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 4
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            previewImage {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
