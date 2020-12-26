import React from 'react'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

import {
    ContentContainer,
    CardCol,
    ProjectOverviewContainer,
    ProjectOverviewCard,
    Heading,
    OptionsContainer
} from './project-overview.styles'


const ProjectOverview = () => {
    const data = useStaticQuery(graphql`
        query {
            desktop: file(relativePath: { eq: "projekt-1.jpg" }) {
                childImageSharp {
                    fluid {
                    ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            desktop2: file(relativePath: { eq: "projekt-2.jpg" }) {
                childImageSharp {
                    fluid {
                    ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            materialProjects: file(relativePath: { eq: "materials-projects.png" }) {
                childImageSharp {
                    fluid {
                    ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)

    const imageData = data.desktop.childImageSharp.fluid
    const imageData2 = data.desktop2.childImageSharp.fluid
    const materialProjects = data.materialProjects.childImageSharp.fluid


    return (
        <ProjectOverviewContainer id='projekty'>
            <Heading
                data-sal="slide-right"
                data-sal-duration='800'
                data-sal-easing="ease-out"
            >Projekty</Heading>

            <ContentContainer>

                <ProjectOverviewCard>
                    <CardCol
                        data-sal="slide-right"
                        data-sal-duration='1000'
                        data-sal-easing="ease-out"
                    >
                        <Image alt='Project image' fluid={imageData} />
                    </CardCol>
                    <CardCol
                        data-sal="fade"
                        data-sal-delay="1000"
                        data-sal-duration='1000'
                        data-sal-easing="ease-out"
                    >
                        <p>
                            Naše zákazkové stolárstvo v Špačinciach - okr. Trnava bolo založené v roku 2002 zo zameraním na výrobu kuchynských liniek. Ponúkame kvalitnú výrobu nábytku na mieru , ktorá splní všetky vaše požiadavky a potreby. Použitie výhradne kvalitných materiálov od dodávateľov ako napríklad  Egger,Kaindl ,Fundermax ,Blum  je zárukou dlhej životnosti a odolnosti. Aby bola dosiahnutá čo najlepšia kvalita a presnosť  našich výrobkov tak používame stroje od firmy Felder a Holz-Her.
                        </p>
                        <OptionsContainer>
                            <Image fluid={materialProjects} />
                        </OptionsContainer>
                    </CardCol>
                </ProjectOverviewCard>

                <ProjectOverviewCard>
                    <CardCol
                        data-sal="slide-left"
                        data-sal-duration='1000'
                        data-sal-easing="ease-out"
                    >
                        <Image alt='Project image' fluid={imageData2} />
                    </CardCol>
                    <CardCol
                        data-sal="fade"
                        data-sal-delay="1000"
                        data-sal-duration='1000'
                        data-sal-easing="ease-out"
                    >
                        <p>
                            Samozrejmosťou je odborné poradenstvo a individuálny prístup ku každému zákazníkovi. Veríme, že tak ako mnohí pred Vami, i Vy budete spokojní s nábytkom na mieru od nás. Splnenie Vašich požiadaviek je pre nás prioritou. Preto naša ponuka nepozná obmedzenie či už v oblasti dizajnu a štýlu, ale i v oblasti doplnkov a farebných prevedení. V prípade, že sme Vás zaujali, neváhajte nás osloviť prostredníctvom ktoréhokoľvek z uvedených kontaktných údajov. Tešíme sa na spoluprácu.
                        </p>
                        <OptionsContainer>
                            <Image fluid={materialProjects} />
                        </OptionsContainer>
                    </CardCol>
                </ProjectOverviewCard>
            </ContentContainer>

            <Heading
                data-sal="slide-right"
                // data-sal-delay="300"
                data-sal-duration='800'
                data-sal-easing="ease-out"
            >Materiály</Heading>
        </ProjectOverviewContainer>
    )
}

export default ProjectOverview
