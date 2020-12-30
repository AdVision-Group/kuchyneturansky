import React from 'react'
import styled from 'styled-components'

import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

export const AboutSectionContainer = styled.section`
    width: 100%;
    overflow: hidden;
    display: grid;
    grid-template-columns: 35rem 1fr;
    scroll-margin-top: 8rem;


    @media all and (max-width: 800px) {
        grid-template-columns: 15rem 1fr;

        @media all and (max-width: 500px) {
            grid-template-columns: 1fr;
        }

    }
`

export const Heading = styled.h2`
    position:absolute;
    font-size: 6rem;
    z-index: 99;
    left: -15.1rem;
    top: 8rem;
    text-transform: uppercase;
    font-weight: 900;
    color: #999;

    span {
        color: #fff;
    }

    @media all and (max-width: 800px) {
        top: 4rem;
        left: -7.6rem;
        font-size: 3rem;

        @media all and (max-width: 500px) {
            left: 1rem;

        }
    }
`

export const ImageCol = styled.div`
    height: 100%; 

    .gatsby-image-wrapper {
        height: 100%;
    }

`


export const ContentCol = styled.div`
    position: relative;
    background-color: lightgray;

    width: 100%;
    padding: 4rem;

    p {
        color: #999;
        font-weight: 400;
        max-width: 100rem;
        margin-top: 15rem;
        line-height: 1.8;
    }

        @media all and (max-width: 800px) {
            padding: 1rem;
            p {
                margin-top: 8rem;
                font-size: 1.4rem;
            }

        @media all and (max-width: 500px) {
            padding-bottom: 5rem;
        }
    }
`

const AboutSection = () => {
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
        <AboutSectionContainer
            id="pribeh"
            data-sal="fade"
            // data-sal-delay="500"
            data-sal-duration='500'
            data-sal-easing="ease-out"
        >
            <ImageCol>
                <Image alt='about image' fluid={imageData} />
            </ImageCol>
            <ContentCol>
                <Heading
                    data-sal="fade"
                    data-sal-delay="700"
                    data-sal-duration='1000'
                    data-sal-easing="ease-out"
                >
                    <span>Ako</span> som začal
                </Heading>
                <p
                    data-sal="slide-left"
                    data-sal-delay="1000"
                    data-sal-duration='1000'
                    data-sal-easing="ease-out"
                >
                    Naše zákazkové stolárstvo v Špačinciach - okr. Trnava bolo založené v roku 2002 so zameraním na výrobu kuchynských liniek. Ponúkame kvalitnú výrobu nábytku na mieru, ktorá splní všetky vaše požiadavky a potreby. Použitie výhradne kvalitných materiálov od dodávateľov, ako napríklad Egger, Kaindl, Fundermax, Blum je zárukou dlhej životnosti a odolnosti. Aby bola dosiahnutá čo najlepšia kvalita a presnosť našich výrobkov, používame stroje od firmy Felder a Holz-Her. Samozrejmosťou je odborné poradenstvo a individuálny prístup ku každému zákazníkovi. Veríme, že tak ako mnohí pred Vami i Vy budete spokojní s nábytkom na mieru od nás. Splnenie Vašich požiadaviek je pre nás prioritou. Preto naša ponuka nepozná obmedzenie či už v oblasti dizajnu a štýlu, ale i v oblasti doplnkov a farebných prevedení. V prípade, že sme Vás zaujali, neváhajte nás osloviť prostredníctvom ktoréhokoľvek z uvedených kontaktných údajov. Tešíme sa na spoluprácu.
                </p>
            </ContentCol>
        </AboutSectionContainer>
    )
}

export default AboutSection
