import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';

import { getArrData, media } from '../utils';
import SEO from '../components/SEO';
import Page from '../components/Page';
import PageHeader from '../components/PageHeader';

const Gallery = ({ data }) => {
  const galleryItems = getArrData(data);
  const headerImage = data.headerImg.childImageSharp.fluid;

  return (
    <Page>
      <SEO title="Galleria" image={headerImage.src} slug="/galleria" />

      <PageHeader img={headerImage} title="Galleria" />

      <GalleryWrapper>
        <GalleryItems>
          {galleryItems.map(({ id, slug, title, previewImage }) => (
            <GalleryLink key={id} to={slug}>
              <GalleryPreview fluid={previewImage.childImageSharp.fluid} />
              <GalleryItemTitle>{title}</GalleryItemTitle>
            </GalleryLink>
          ))}
        </GalleryItems>
      </GalleryWrapper>
    </Page>
  );
};

const GalleryWrapper = styled.div`
  max-width: 1200px;
  margin: 32px auto;
`;

const GalleryItems = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

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
  position: relative;

  ${media.sm`
    width: 100%;
  `}
`;

const GalleryPreview = styled(Image)`
  height: 80vh;
  min-height: 400px;
  border-radius: 2px;

  :hover {
    filter: brightness(90%);
  }

  ${media.sm`
    height: 300px;
  `}
`;

const GalleryItemTitle = styled.h2`
  font-weight: 200;
  font-size: 24px;
  position: absolute;
  left: 16px;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  padding: 8px;
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
`;

export const query = graphql`
  query {
    headerImg: file(relativePath: { eq: "gallery_header.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "galleryItem" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 100
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

export default Gallery;
