import React from 'react';
import { graphql } from 'gatsby';

import Page from '../components/Page';
import { getArrData } from '../utils';

const Gallery = ({ data }) => {
  const galleryItems = getArrData(data);
  console.log({ galleryItems });
  return (
    <Page>
      <h1>Galleria</h1>
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
