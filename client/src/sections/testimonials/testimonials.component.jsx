import React from 'react'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

import {
    TestimonialContainer,
    ContentCol,
    UserName,
    UserIcon,
    Quote
} from './testimonials.styles'

const TestimonialSection = () => {
    const data = useStaticQuery(graphql`
        query {
            desktop: file(relativePath: { eq: "ako-som-zacal.jpg" }) {
            childImageSharp {
                fluid {
                ...GatsbyImageSharpFluid_withWebp
                }
            }
            }
        }
    `)

    const imageData = data.desktop.childImageSharp.fluid

    return (
        <TestimonialContainer
            id='recenzie'
            data-sal="fade"
            data-sal-duration='1000'
            data-sal-easing="ease-out"
        >
            <Image className='bg-image' alt='bg image' fluid={imageData} />
            <ContentCol
                data-sal="slide-right"
                data-sal-delay="100"
                data-sal-duration='1000'
                data-sal-easing="ease-out"
            >
                <UserIcon
                    data-sal="fade"
                    data-sal-delay="800"
                    data-sal-duration='1500'
                    data-sal-easing="ease-out"
                />
                <UserName
                    data-sal="fade"
                    data-sal-delay="900"
                    data-sal-duration='1500'
                    data-sal-easing="ease-out"
                >Gréta K.</UserName>
                <Quote
                    data-sal="fade"
                    data-sal-delay="1000"
                    data-sal-duration='1500'
                    data-sal-easing="ease-out"
                >"Po novej kuchyni som snívala už dlho a pán Turanský mi to splnil"</Quote>
            </ContentCol>
        </TestimonialContainer>
    )
}

export default TestimonialSection
