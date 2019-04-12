const dotenv = require('dotenv');

if (process.env.ENVIRONMENT !== 'production') {
  dotenv.config();
}

const { CONTENTFUL_ACCESS_TOKEN } = process.env;

const contentfulConfig = {
  spaceId: 'ojchvuv6fxak',
  accessToken: CONTENTFUL_ACCESS_TOKEN,
};

module.exports = {
  siteMetadata: {
    title: 'Global City Data',
    siteUrl: 'https://globalcitydata.com',
    description:
      'Global City Data. Thinking in Systems to Link Urban Infrastructure with Multiple Sustainability Outcomes.',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-136748497-1',
        // Puts tracking script in the head instead of the body
        // head: false,
        // // Setting this parameter is optional
        // anonymize: true,
        // // Setting this parameter is also optional
        // respectDNT: true,
        // // Avoids sending pageview hits from custom paths
        // exclude: ['/preview/**', '/do-not-track/me/too/'],
        // // Enables Google Optimize using your container Id
        // optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
        // // Enables Google Optimize Experiment ID
        // experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
        // // Set Variation ID. 0 for original 1,2,3....
        // variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
        // // Any additional create only fields (optional)
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: 'example.com',
      },
    },
    'gatsby-plugin-sitemap', // generates sitemap with build
    'gatsby-transformer-remark', // transforming markdown to html
    'gatsby-plugin-styled-components', // styled-components (css-in-js)
    'gatsby-plugin-sharp', // compress images
    'gatsby-transformer-sharp', // assist gatsby-plugin-sharp in processing images
    // {
    //   resolve: 'gatsby-plugin-typography', // basic font theming of website
    //   options: {
    //     pathToConfigModule: 'src/utils/typography',
    //   },
    // },
    {
      resolve: 'gatsby-source-contentful', // get contentful data for graphql queries
      options: contentfulConfig,
    },
    'gatsby-plugin-react-helmet', // adding page metadata for SEO
    // Following plugins for building a PWA
    // see https://developers.google.com/web/progressive-web-apps/
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Global City Data',
        short_name: 'GCD',
        start_url: '/',
        background_color: '#2196f3',
        theme_color: '#2196f3',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/images/nsf_logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};
