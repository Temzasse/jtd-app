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
  console.log('> galleryItems', galleryItems);

  return (
    <Page>
      <SEO />

      <PageHeader img={data.headerImg.childImageSharp.fluid} title="Galleria" />

      <GalleryWrapper>
        <GalleryItems>
          {galleryItems.map(({ id, slug, title, previewImage }) => (
            <GalleryLink key={id} to={slug}>
              <GalleryPreview fluid={previewImage.childImageSharp.fluid} />
              <h2>{title}</h2>
            </GalleryLink>
          ))}
        </GalleryItems>
      </GalleryWrapper>
    </Page>
  );
};

const GalleryWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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

  ${media.sm`
    width: 100%;
  `}
`;

const GalleryPreview = styled(Image)`
  height: 300px;
  border-radius: 8px;

  ${media.sm`
    height: 300px;
  `}
`;

export const query = graphql`
  query {
    headerImg: file(relativePath: { eq: "landing_page_header.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 500) {
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
                fluid(maxWidth: 600) {
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
