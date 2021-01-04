require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  pathPrefix: `/kuchyneturansky`,
  // pathPrefix: `/`,
  siteMetadata: {
    title: `Kuchyne Turanský`,
    description: `Firma je zameraná na výrobu so špecializáciou na moderné kuchynské linky na mieru a sektorového nábytku (vstavané skrine, detské izby, kancelársky nábytok, obyvačkové zostavy...). Nemáme obmedzené možnosti štýlov, limitovaný výber farieb a nápadov. Vyrobíme pre Vás moderné kuchynské linky na mieru ako aj ostatný nábytok podľa želania. Pomôžeme Vám tiež pri výbere spotrebičov. Ku každému zákazníkovi pristupujeme individuálne a všetky produkty sú vyrábané na mieru a vo vlastnej výrobe.`,
    author: `@Advision-solution`,

  },
  plugins: [
    `gatsby-plugin-smoothscroll`,
    {
      // ('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;900&display=swap');
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat:wght@300,400,500,700,900`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
