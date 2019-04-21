import React from 'react';
import { graphql } from 'gatsby';

import Page from '../components/Page';
import { getArrData } from '../utils';
import Header from '../components/Header';
import SEO from '../components/SEO';

const Gallery = ({ data }) => {
  const galleryItems = getArrData(data);
  console.log({ galleryItems });

  return (
    <Page>
      <SEO />

      <Header img={data.headerImg.childImageSharp.fluid} title="Galleria" />

      {galleryItems.map(({ title, description, id }) => (
        <div key={id}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      ))}
    </Page>
  );
};

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
    }
  }
`;

export default Gallery;
