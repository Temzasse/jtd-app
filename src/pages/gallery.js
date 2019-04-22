import React from 'react';
import { graphql, Link } from 'gatsby';

import { getArrData } from '../utils';
import SEO from '../components/SEO';
import Img from '../components/Img';
import Page from '../components/Page';
import Header from '../components/Header';

const Gallery = ({ data }) => {
  const galleryItems = getArrData(data);
  console.log({ galleryItems });

  return (
    <Page>
      <SEO />

      <Header img={data.headerImg.childImageSharp.fluid} title="Galleria" />

      {galleryItems.map(({ id, slug, title, description, previewImage }) => (
        <Link key={id} to={slug}>
          <Img src={previewImage} />
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
            previewImage
            galleryImages
          }
        }
      }
    }
  }
`;

export default Gallery;
