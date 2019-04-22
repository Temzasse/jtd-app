const path = require('path');

const IS_DEV = process.env.NODE_ENV === 'development';

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
    'gatsby-transformer-remark',

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
