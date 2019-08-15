const path = require('path');

const IS_DEV = process.env.NODE_ENV === 'development';

const NETLIFY_CMS_ASSETS_DIR = IS_DEV
  ? path.join(__dirname, 'static', 'assets', 'dev')
  : path.join(__dirname, 'static', 'assets', 'prod');

const MD_DATA_DIR = IS_DEV
  ? path.join(__dirname, 'src', 'data', 'dev')
  : path.join(__dirname, 'src', 'data', 'prod');

const NETLIFY_CMS_PATH = IS_DEV
  ? path.join(__dirname, 'src', 'cms', 'cms.dev.js')
  : path.join(__dirname, 'src', 'cms', 'cms.prod.js');

module.exports = {
  siteMetadata: {
    title: 'Sisustussuunnittelja Johanna Syvälahti-Taskula',
    description:
      'Teen sisustussuunnittelua koteihin pääasiassa pääkäupunkiseudulla tavoitteena löytää toimivat ja kauniit ratkaisut, jotka miellyttävät sinua.',
  },
  plugins: [
    // Define the location for images produced by netlify-cms
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: NETLIFY_CMS_ASSETS_DIR,
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
        path: MD_DATA_DIR,
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

    {
      // Keep this as last plugin !!!
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: NETLIFY_CMS_PATH,
        manualInit: true,
      },
    },
  ].filter(Boolean),
};
