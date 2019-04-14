import React from 'react';
import { graphql } from 'gatsby';

import Page from '../components/Page';
import { getArrData } from '../utils';
import Header from '../components/Header';

const Gallery = ({ data }) => {
  const galleryItems = getArrData(data);
  console.log({ galleryItems });

  return (
    <Page>
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
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`;

export default Gallery;
