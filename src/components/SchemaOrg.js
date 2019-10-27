import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const SchemaOrg = ({
  title,
  defaulTitle,
  image,
  url,
  isGalleryItem,
  description,
  organization,
}) => {
  const baseSchema = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
      alternateName: defaulTitle,
    },

    {
      '@context': 'http://schema.org',
      '@type': 'Organization',
      description,
      url: organization.url,
      legalName: organization.legalName,
      name: organization.name,
      email: organization.email,
      telephone: organization.telephone,
      address: organization.address,
      sameAs: [
        'mailto:info@johannataskula.fi',
        'https://www.facebook.com/JohannaTaskula/',
        'https://www.instagram.com/johannataskula/',
      ],
    },
  ];

  const schema = isGalleryItem
    ? [
        ...baseSchema,
        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': url,
                name: title,
                image,
              },
            },
          ],
        },
      ]
    : baseSchema;

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

SchemaOrg.propTypes = {
  title: PropTypes.string,
  defaulTitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isGalleryItem: PropTypes.bool.isRequired,
  organization: PropTypes.shape({
    url: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    legalName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    telephone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
};

export default React.memo(SchemaOrg);
