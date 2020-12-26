import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ReferenceProvider from '../../context/reference/reference.context'
import Layout from '../../components/layout/layout'
import SEO from '../../components/seo'
import Image from 'gatsby-image'

import Referencies from '../../components/references-container/referencies-container.component'

import {
    ContentContainer,
    HeaderContainer,
    Header
} from './category.styles'

const CategoryPage = (data) => {
    const query = useStaticQuery(graphql`
        query {
            images: allFile(filter: {relativeDirectory: {eq: "category-page"}}) {
                nodes {
                childImageSharp {
                    fluid {
                    ...GatsbyImageSharpFluid_withWebp
                    originalName
                    }
                }
                }
            }
            circles: allFile(filter: {relativeDirectory: {eq: "category-page-circle"}}) {
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

    const images = query.images.nodes
    const circles = query.circles.nodes

    const headerImageData = images.find(img => img.childImageSharp.fluid.originalName === data.pathContext.image)
    const circleImageData = circles.find(img => img.childImageSharp.fluid.originalName === data.pathContext.circle)


    return (
        <Layout>
            <SEO title={data.pathContext.name} />
            <ReferenceProvider>
                <ContentContainer>
                    <HeaderContainer
                        data-sal="fade"
                        data-sal-duration='1000'
                        data-sal-easing="ease-out"
                    >
                        <Image fluid={headerImageData.childImageSharp.fluid} />
                        <Header
                            data-sal="fade"
                            data-sal-delay="1000"
                            data-sal-duration='1000'
                            data-sal-easing="ease-out"
                            black={data.pathContext.slug === 'leskle'}
                        >
                            <Image fluid={circleImageData.childImageSharp.fluid} />

                            <h1>{data.pathContext.name}</h1>
                        </Header>
                    </HeaderContainer>
                    <Referencies category={data.pathContext.slug} />
                </ContentContainer>
            </ReferenceProvider>
        </Layout>
    )
}

export default CategoryPage
