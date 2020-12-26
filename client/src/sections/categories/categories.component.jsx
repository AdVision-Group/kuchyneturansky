import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { ParallaxProvider } from 'react-scroll-parallax';
import CategoryCard from '../../components/category-card/category-card.component'

import {
    CategorySection,
    ContentContainer,
    SectionTitle
} from './categories.styles'

const KitchensCategoriesSection = () => {
    const data = useStaticQuery(graphql`
        query {
            images: allFile(filter: {relativeDirectory: {eq: "category-overview"}}) {
                nodes {
                childImageSharp {
                    fluid {
                    ...GatsbyImageSharpFluid_withWebp
                    originalName
                    }
                }
                }
            }
        }
    `)

    const images = data.images.nodes
    const products = [
        {
            title: "Matné",
            image: images.find(img => img.childImageSharp.fluid.originalName === 'matne.png'),
            slug: 'kuchyne/matne',
            y: ['-40%', '50%']
            // y: [-100, 100]
        },
        {
            title: "Lesklé",
            image: images.find(img => img.childImageSharp.fluid.originalName === 'leskle.png'),
            slug: 'kuchyne/leskle',
            y: ['0%', '0%']
        },
        {
            title: "Drevodekor",
            image: images.find(img => img.childImageSharp.fluid.originalName === 'drevokor.png'),
            slug: 'kuchyne/drevodekor',
            y: ['-40%', '50%']
            // y: [-100, 100]

        },
        {
            title: "Fólia",
            image: images.find(img => img.childImageSharp.fluid.originalName === 'folia.png'),
            slug: 'kuchyne/folia',
            y: ['0%', '0%']
        },
        {
            title: "Iný nábytok",
            image: images.find(img => img.childImageSharp.fluid.originalName === 'iny-nabytok.png'),
            slug: 'kuchyne/iny-nabytok',
            y: ['-40%', '50%']
            // y: [-100, 100]
        },
    ]

    return (
        <CategorySection id='sluzby'>
            <SectionTitle
                data-sal="slide-right"
                data-sal-duration='800'
                data-sal-easing="ease-out"
            >
                Kuchyne
            </SectionTitle>
            <ParallaxProvider>
                <ContentContainer>
                    {products.map((product, idx) => (
                        <CategoryCard
                            key={idx}
                            imageData={product.image}
                            category={product}
                            black={idx === 1}
                        />
                    ))}
                </ContentContainer>
            </ParallaxProvider>
        </CategorySection>
    )
}

export default KitchensCategoriesSection

