import React from 'react';
import { graphql } from 'gatsby';

import Page from '../components/Page';
import SEO from '../components/SEO';
import { getData } from '../utils';

export default function GalleryItemTemplate({ data }) {
  console.log(data);
  const galleryItem = getData(data);
  console.log(galleryItem);

  return (
    <Page>
      <SEO />

      <div>
        <h1>{galleryItem.title}</h1>
        <h2>{galleryItem.date}</h2>
      </div>
    </Page>
  );
}

export const pageQuery = graphql`
  query GalleryItemByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
      }
    }
  }
`;
