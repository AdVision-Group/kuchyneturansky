require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  pathPrefix: `/kuchyneturansky`,
  // pathPrefix: `/`,
  siteMetadata: {
    title: `Kuchyne Turanský`,
    description: `Naše zákazkové stolárstvo v Špačinciach - okr. Trnava bolo založené vroku 2002 zo zameraním na výrobu kuchynských liniek. Ponúkame kvalitnú výrobu nábytku na mieru , ktorá splní všetky vaše požiadavky a potreby. Použitie výhradne kvalitných materiálov od dodávateľov ako napríklad  Egger,Kaindl ,Fundermax ,Blum  je zárukou dlhej životnosti a odolnosti. Aby bola dosiahnutá čo najlepšia kvalita apresnosť  našich výrobkov tak používame stroje od firmy Felder aHolz-Her. Samozrejmosťou je odborné poradenstvo a individuálny prístup ku každému zákazníkovi. Veríme, že tak ako mnohí pred Vami, i Vy budete spokojní s nábytkom na mieru od nás. Splnenie Vašich požiadaviek je pre nás prioritou. Preto naša ponuka nepozná obmedzenie či už v oblasti dizajnu a štýlu, ale i v oblasti doplnkov a farebných prevedení. V prípade, že sme Vás zaujali, neváhajte nás osloviť prostredníctvom ktoréhokoľvek z uvedených kontaktných údajov. Tešíme sa na spoluprácu.`,
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
