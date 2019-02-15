const dotenv = require('dotenv');

if (process.env.ENVIRONMENT !== 'production') {
  dotenv.config();
}

const { CONTENTFUL_ACCESS_TOKEN } = process.env;

module.exports = {
  siteMetadata: {
    title: 'Global City Data',
    siteUrl: 'https://globalcitydata.com',
    description:
      'Thinking in systems to link urban infrastructure and sustainability.',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'ojchvuv6fxak',
        // Learn about environment variables: https://gatsby.app/env-vars
        accessToken: CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
