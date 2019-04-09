const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const { edges } = result.data.allMarkdownRemark;

    edges.forEach(({ node }) => {
      const { id, fields, frontmatter } = node;

      // Create pages for gallery items
      createPage({
        path: fields.slug,
        component: path.resolve(`src/templates/${frontmatter.templateKey}.js`),
        // Additional data can be passed via context
        context: { id },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // Add slug field
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({ name: `slug`, node, value });
  }
};

const replacePath = path => {
  switch (path) {
    case '/gallery/':
      return '/galleria';
    case '/contact/':
      return '/ota-yhteytta';
    case '/services/':
      return '/palvelut';
    default:
      return path;
  }
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  const oldPage = Object.assign({}, page);

  // Change paths created from file names to finnish alternatives
  page.path = replacePath(page.path);

  if (page.path !== oldPage.path) {
    // Replace new page with old page
    deletePage(oldPage);
    createPage(page);
  }
};
