module.exports = {
  flags: { DEV_SSR: true },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Work Sans\:300,400,400i,700`],
        display: "swap",
      },
    },
  ],
}
