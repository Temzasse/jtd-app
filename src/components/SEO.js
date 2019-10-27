import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const SEO = props => (
  <StaticQuery
    query={query}
    render={({ site: { siteMetadata: seo } }) => {
      const title = props.titlePrefix
        ? `${props.titlePrefix} · ${seo.title}`
        : seo.title;

      const description = props.description || seo.description;
      const url = props.slug ? `${seo.siteUrl}${props.slug}` : seo.siteUrl;
      const image = props.image ? `${seo.siteUrl}${props.image}` : seo.image;

      return (
        <Helmet>
          {/* General tags */}
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="canonical" href={url} />

          {/* OpenGraph tags */}
          <meta property="og:url" content={url} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />

          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={image} />
        </Helmet>
      );
    }}
  />
);

SEO.propTypes = {
  titlePrefix: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  slug: PropTypes.string,
};

SEO.defaultProps = {
  titlePrefix: null,
  description: null,
  image: null,
  slug: null,
};

export default SEO;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        siteUrl
        image
      }
    }
  }
`;
