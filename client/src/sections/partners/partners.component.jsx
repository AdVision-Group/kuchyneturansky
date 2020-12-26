import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Image from 'gatsby-image'

export const SectionContainer = styled.section`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 10rem 3rem;
    align-items: center;
    grid-gap: 5rem;


    @media all and (max-width: 800px) {
        grid-template-columns: 1fr 1fr;

        @media all and (max-width: 500px) {
            grid-template-columns: 1fr;

        }
    } 

    .bg-image {
        z-index: -1;
        position: absolute !important;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    div {
        /* width: 18rem; */

        @media all and (max-width: 800px) {
            /* width: 50%; */
            /* height: auto;
            margin-bottom: 5rem; */

            @media all and (max-width: 500px) {
                grid-template-columns: 1fr;

            }
        } 
    }
`

const ImageContainer = styled.div`
    padding: 3rem;
`

const PartnersSection = () => {
    const data = useStaticQuery(graphql`
        query {
            backgroundImage: file(relativePath: { eq: "mramor.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }

            logo: allFile(filter: {relativeDirectory: {eq: "partners"}}) {
                nodes {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    `)

    const imageData = data.backgroundImage.childImageSharp.fluid

    const logos = data.logo.nodes

    return (
        <SectionContainer>
            <Image fluid={imageData} className='bg-image' />
            {
                logos.map((logo, idx) => (
                    <div
                        key={idx}
                        data-sal="fade"
                        data-sal-delay="100"
                        data-sal-duration='500'
                        data-sal-easing="ease-out"
                    >
                        <ImageContainer>
                            <Image fluid={logo.childImageSharp.fluid} />

                        </ImageContainer>
                    </div>
                ))
            }
        </SectionContainer>
    )
}

export default PartnersSection
