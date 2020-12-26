import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

import {
    HeroContent,
    LogoContainer,
    SocialIcon,
    SocialLinksContainer
} from './hero.styles'

const HeroSection = ({ className }) => {
    return (
        <StaticQuery
            query={graphql`
                query {
                    desktop: file(relativePath: { eq: "hero-bg.jpg" }) {
                        childImageSharp {
                            fluid {
                            ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    brandLogo: file(relativePath: { eq: "logo-landing.png" }) {
                        childImageSharp {
                            fluid {
                            ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    igLogo: file(relativePath: { eq: "ig-logo.png" }) {
                        childImageSharp {
                            fluid {
                            ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    fbLogo: file(relativePath: { eq: "fb-logo.png" }) {
                        childImageSharp {
                            fluid {
                            ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
                `}
            render={data => {
                // Set ImageData.
                const imageData = data.desktop.childImageSharp.fluid
                const brandLogo = data.brandLogo.childImageSharp.fluid
                const igLogo = data.igLogo.childImageSharp.fluid
                const fbLogo = data.fbLogo.childImageSharp.fluid
                return (
                    <BackgroundImage
                        Tag="section"
                        className={className}
                        fluid={imageData}
                        backgroundColor={`#040e18`}
                    >
                        <HeroContent>
                            <LogoContainer>
                                <Image fluid={brandLogo} />
                            </LogoContainer>
                            <SocialLinksContainer>
                                <SocialIcon
                                    data-sal="fade"
                                    data-sal-duration='1000'
                                    data-sal-easing="ease-out"
                                >
                                    <Image fluid={fbLogo} />
                                </SocialIcon>
                                <SocialIcon
                                    data-sal="fade"
                                    data-sal-delay="200"
                                    data-sal-duration='1000'
                                    data-sal-easing="ease-out"
                                >
                                    <Image fluid={igLogo} />
                                </SocialIcon>
                            </SocialLinksContainer>
                        </HeroContent>
                    </BackgroundImage>
                )
            }}
        />
    )


}

const HeroSectionContainer = styled(HeroSection)`
  width: 100%;
  height: 100vh;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;

`

export default HeroSectionContainer
