module.exports = {
  siteMetadata: {
    title: 'Sameer Sawant',
  },
  plugins: ['gatsby-plugin-react-helmet',
  'gatsby-plugin-catch-links',
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/pages`,
      name: 'pages',
    },
  },{
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `img`,
      path: `${__dirname}/src/img/`
    }
  },
  'gatsby-transformer-remark',
],
}
