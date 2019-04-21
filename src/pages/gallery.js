import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

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

      {galleryItems.map(({ id, slug, title, description, previewImage }) => (
        <Link key={id} to={slug}>
          <Image fixed={previewImage.childImageSharp.fixed} />
          <h2>{title}</h2>
          <p>{description}</p>
        </Link>
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
          fields {
            slug
          }
          frontmatter {
            title
            description
            previewImage {
              childImageSharp {
                fixed(width: 500) {
                  ...GatsbyImageSharpFixed
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
