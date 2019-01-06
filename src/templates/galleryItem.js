import React from 'react';
import { graphql } from 'gatsby';

export default function GalleryItemTemplate({ data }) {
  console.log(data);
  const { markdownRemark: item } = data;
  const { frontmatter, html } = item;

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}


export const pageQuery = graphql`
  query GalleryItemByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;
