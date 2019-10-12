import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import chunk from 'lodash.chunk';
import sum from 'lodash.sum';
import orderBy from 'lodash.orderby';
import Image from 'gatsby-image';

import { media, getData } from '../utils';
import Page from '../components/Page';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Lightbox from '../components/Lightbox';
import Gutter from '../components/Gutter';

export default function GalleryItemTemplate({ data }) {
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [lightboxImage, setLightboxImage] = React.useState(null);
  const galleryItem = getData(data);

  const images = orderBy(
    galleryItem.galleryImages.map(image => ({
      ...image.childImageSharp.fluid,
    })),
    'aspectRatio'
  ).map((image, index) => ({ ...image, index }));

  const rows = chunk(images, 2);

  function openLightbox(imageIndex) {
    setLightboxImage(imageIndex);
    setLightboxOpen(true);
  }

  function closeLightbox() {
    setLightboxImage(null);
    setLightboxOpen(false);
  }

  return (
    <Page>
      <SEO />

      <PageHeader
        title={galleryItem.title}
        img={galleryItem.previewImage.childImageSharp.fluid}
      />

      <ContentContainer>
        <Content>
          <GalleryDescription>
            <hr />
            <span>{galleryItem.description}</span>
            <hr />
          </GalleryDescription>

          <Gutter dir="vertical" />

          <GalleryImages>
            {rows.map(row => {
              const rowAspectRatioSum = sum(
                row.map(image => image.aspectRatio)
              );

              return row.map(image => (
                <GalleryImageWrapper
                  key={image.src}
                  onClick={() => openLightbox(image.index)}
                >
                  <GalleryImage
                    width={`${(image.aspectRatio / rowAspectRatioSum) * 100}%`}
                    fluid={image}
                  />
                </GalleryImageWrapper>
              ));
            })}
          </GalleryImages>
        </Content>
      </ContentContainer>

      {lightboxOpen && (
        <Lightbox
          images={images}
          selectedIndex={lightboxImage}
          close={closeLightbox}
        />
      )}
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

const GalleryDescription = styled.p`
  display: flex;
  align-items: center;
  margin: 0px;
  padding: 32px 0px;

  & > hr {
    flex: 1;
    height: 2px;
    border: none;
    background-color: ${props => props.theme.primary[300]};
    border-radius: 2px;
  }

  & > span {
    max-width: 700px;
    padding: 16px;
  }

  & > span::first-letter {
    background-color: ${props => props.theme.primary[300]};
    color: ${props => props.theme.primary[700]};
    padding: 0px 4px;
    margin-right: 4px;
    font-size: 48px;
    float: left;
    line-height: 1;
  }

  ${media.sm`
    padding: 0px;

    & > hr {
     display: none; 
    }
  `}
`;

const GalleryImages = styled.div``;

const GalleryImageWrapper = styled.div`
  display: inline;

  :hover {
    filter: brightness(90%);
  }

  ${media.sm`
    pointer-events: none;
  `}
`;

const GalleryImage = styled(Image)`
  display: inline-block;
  width: ${props => props.width};
  height: auto;

  & img {
    padding: 4px;
    border-radius: 6px;
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
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        galleryImages {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
