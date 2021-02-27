module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [
            "Libre Franklin:400,700,900",
            "Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900",
          ],
        },
      },
    },
  ],
};
