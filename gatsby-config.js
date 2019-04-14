const path = require('path');

// https://blog.rousek.name/2018/08/10/cool-image-loading-with-gatsbyjs-v2-and-netlify-cms-v2/
const netlifyCmsPaths = {
  resolve: 'gatsby-plugin-netlify-cms-paths',
  options: {
    cmsConfig: '/static/admin/config.yml',
  },
};

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, 'src', 'images'),
        name: 'images',
      },
    },
    // Define also the location for images produced by netlify-cms
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, 'static', 'assets'),
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    netlifyCmsPaths,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          // Including in your Remark plugins will transform
          // any paths in your markdown body
          netlifyCmsPaths,
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1000,
              // Required to display blurred image first
              backgroundColor: 'transparent',
            },
          },
        ],
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-remove-console',
    'gatsby-plugin-netlify-cms', // Keep this last
  ],
};
