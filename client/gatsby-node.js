/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = async ({ actions, graphql}) => {
    const { createPage } = actions

    const categories = [
      {
        name: "MATNÉ",
        slug: 'matne',
        image: "matná.jpg",
        circle: "matne.png"
      },
      {
        name: "LESKLÉ",
        slug: 'leskle',
        image: "leskla.jpg",
        circle: "leskla.png"
      },
      {
        name: "DREVODEKOR",
        slug: 'drevodekor',
        image: "drevokor.jpg",
        circle: "drevodekor.png"
      },
      {
        name: "FÓLIA",
        slug: 'folia',
        image: "folia.jpg",
        circle: "folia.png"
      }, 
      {
        name: "INÝ NÁBYTOK",
        slug: 'iny-nabytok',
        image: "iny-nabytok.jpg",
        circle: "iny-nabytok.png"
      }
    ]

    categories.forEach(({slug, name, image, circle}) => {
        createPage({
            path: `/kuchyne/${slug}`,
            component: path.resolve('src/templates/category/category-page.jsx'),
            context: {
                slug,
                name,
                image,
                circle
            }
        })
    })
}