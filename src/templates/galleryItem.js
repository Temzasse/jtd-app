import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import chunk from 'lodash.chunk';
import sum from 'lodash.sum';
import Image from 'gatsby-image';

import { media, getData } from '../utils';
import Page from '../components/Page';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

export default function GalleryItemTemplate({ data }) {
  const galleryItem = getData(data);
  const images = galleryItem.galleryImages.map(
    image => image.childImageSharp.fluid
  );
  const rows = chunk(images, 3);

  return (
    <Page>
      <SEO />

      <PageHeader
        title={galleryItem.title}
        img={galleryItem.previewImage.childImageSharp.fluid}
      />

      <ContentContainer>
        <Content>
          <p>{galleryItem.description}</p>

          <GalleryImages>
            {rows.map(row => {
              const rowAspectRatioSum = sum(
                row.map(image => image.aspectRatio)
              );

              return row.map(image => (
                <GalleryImage
                  key={image.src}
                  width={`${(image.aspectRatio / rowAspectRatioSum) * 100}%`}
                  fluid={image}
                />
              ));
            })}
          </GalleryImages>
        </Content>
      </ContentContainer>
    </Page>
  );
}

const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 1100px;
`;

const Content = styled.div`
  padding: 16px;
`;

const GalleryImages = styled.div``;

const GalleryImage = styled(Image)`
  display: inline-block;
  width: ${props => props.width};
  height: auto;

  :hover {
    filter: brightness(90%);
  }

  & img {
    padding: 4px;
    border-radius: 12px;
  }

  ${media.sm`
    display: block;
    width: 100%;
    margin-bottom: 16px;
  `}
`;

export const pageQuery = graphql`
  query GalleryItemByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
        previewImage {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        galleryImages {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
