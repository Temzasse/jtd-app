const path = require('path');

// TODO:
// - https://www.npmjs.com/package/netlify-cms-backend-fs
// - https://arcath.net/2019/01/netlify-cms-on-the-filesystem-with-gatsby

module.exports = {
  siteMetadata: {
    title: 'Sisustussuunnittelja Johanna Syvälahti-Taskula',
    description: 'Teen sisustussuunnittelua koteihin pääasiassa pääkäupunkiseudulla tavoitteena löytää toimivat ja kauniit ratkaisut, jotka miellyttävät sinua.',
  },
  plugins: [
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
        path: path.join(__dirname, 'src', 'images'),
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, 'src', 'pages'),
        name: 'pages',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          // Including in your Remark plugins will transform
          // any paths in your markdown body
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1000,
            },
          },
        ],
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-remove-console',
    'gatsby-plugin-netlify-cms', // Keep this last
  ],
};
