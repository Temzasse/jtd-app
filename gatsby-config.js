const path = require('path');

const IS_DEV = process.env.NODE_ENV === 'development';
const NETLIFY_CMS_ASSETS_DIR = path.join(__dirname, 'static', 'assets');
const MD_DATA_DIR = path.join(__dirname, 'src', 'data');
const NETLIFY_CMS_PATH = IS_DEV
  ? path.join(__dirname, 'src', 'cms', 'cms.dev.js')
  : path.join(__dirname, 'src', 'cms', 'cms.prod.js');

// TODO: https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt/#netlify

module.exports = {
  siteMetadata: {
    title: 'Sisustussuunnittelija Johanna Taskula',
    description: 'Teen sisustussuunnittelua koteihin ja julkisiin tiloihin pääasiassa pääkaupunkiseudulla. Tavoitteeni on löytää toimivia ja visuaalisesti kauniita ratkaisuja, jotka miellyttävät asiakastani.', // prettier-ignore
    siteUrl: 'https://www.johannataskula.fi',
    image: 'https://www.johannataskula.fi/static/johanna_taskula.jpg',
    logo: 'https://www.johannataskula.fi/static/logo.png',
    legalName: 'Interior Design Johanna Taskula',
    email: 'info@johannataskula.fi',
    telephone: '+358442370181',
    address: 'Armfeltintie 12 A 1, 00150 Helsinki, Suomi',
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

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Sisustussuunnittelija Johanna Taskula',
        short_name: 'JTD',
        start_url: '/',
        background_color: '#e2dfd3',
        theme_color: '#7c7251',
        display: 'standalone',
        icon: `src/images/logo_white_black_bg.png`,
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
