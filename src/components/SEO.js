import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import SchemaOrg from './SchemaOrg';

const SEO = props => (
  <StaticQuery
    query={query}
    render={({ site: { siteMetadata: seo } }) => {
      const title = props.title || seo.title;
      const prettyTitle = props.title
        ? `${props.title} · ${seo.title}`
        : seo.title;

      const description = props.description || seo.description;
      const url = props.slug ? `${seo.siteUrl}${props.slug}` : seo.siteUrl;
      const image = props.image ? `${seo.siteUrl}${props.image}` : seo.image;

      const organization = {
        logo: seo.logo,
        name: seo.title,
        legalName: seo.legalName,
        email: seo.email,
        telephone: seo.telephone,
        address: seo.address,
        url: seo.siteUrl,
      };

      return (
        <>
          <Helmet>
            {/* General tags */}
            <title>{prettyTitle}</title>
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

          {/* Schema.org tags */}
          <SchemaOrg
            url={url}
            image={image}
            title={title}
            defaulTitle={seo.title}
            description={description}
            isGalleryItem={!!props.isGalleryItem}
            organization={organization}
          />
        </>
      );
    }}
  />
);

SEO.propTypes = {
  isGalleryItem: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  slug: PropTypes.string,
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
        logo
        legalName
        email
        telephone
        address
      }
    }
  }
`;
