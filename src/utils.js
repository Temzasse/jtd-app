import { css } from '@emotion/core';

export const getArrData = data => {
  console.log('> Arr data:', data);
  return data.allMarkdownRemark.edges.map(({ node }) => ({
    id: node.id,
    ...node.frontmatter,
  }));
};

export const getData = data => {
  console.log('> Data:', data);
  const { frontmatter, html, id } = data.markdownRemark;
  return {
    id,
    content: html,
    ...frontmatter,
  };
};

export const mobileOnly = css`
  @media screen and (min-width: 34em) {
    display: none;
  }
`;

export const desktopOnly = css`
  @media screen and (max-width: 34em) {
    display: none;
  }
`;
