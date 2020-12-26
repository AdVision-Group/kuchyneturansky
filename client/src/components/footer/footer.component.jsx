import React from 'react'
import { navigate } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll'

import { FooterContainer, RowStyles, ColStyles, NavLink } from './footer.styles'

const Footer = () => {
    const handleClickNavLink = (path) => {
        if (window.location.pathname !== '/') {
            navigate(`/${path}`)
        } else {
            scrollTo(path)
        }
    }

    return (
        <FooterContainer id='footer'>
            <RowStyles>
                <ColStyles
                    data-sal="fade"
                    // data-sal-delay="200"
                    data-sal-duration='1000'
                    data-sal-easing="ease-out"
                >
                    <h2>
                        Kuchyne Turanský
                    </h2>
                </ColStyles>
                <ColStyles
                    data-sal="fade"
                    data-sal-delay="200"
                    data-sal-duration='1000'
                    data-sal-easing="ease-out"
                >
                    <h3>Sitemap</h3>
                    <NavLink onClick={() => handleClickNavLink('#sluzby')}>
                        Služby
                    </NavLink>
                    <NavLink onClick={() => handleClickNavLink('#projekty')}>
                        Projekty
                    </NavLink>
                    <NavLink onClick={() => handleClickNavLink('#pribeh')}>
                        Príbeh
                    </NavLink>
                    <NavLink onClick={() => handleClickNavLink('#recenzie')}>
                        Referencie
                    </NavLink>
                </ColStyles>
                <ColStyles
                    data-sal="fade"
                    data-sal-delay="400"
                    data-sal-duration='1000'
                    data-sal-easing="ease-out"
                >
                    <h3>KUCHYNE</h3>
                    <NavLink onClick={() => navigate('/kuchyne/matne')}>
                        Matné
                    </NavLink>
                    <NavLink onClick={() => navigate('/kuchyne/leskle')}>
                        Lesklé
                    </NavLink>
                    <NavLink onClick={() => navigate('/kuchyne/drevodekor')}>
                        Drevodekor
                    </NavLink>
                    <NavLink onClick={() => navigate('/kuchyne/folia')}>
                        Fólia
                    </NavLink>
                    <NavLink onClick={() => navigate('/kuchyne/iny-nabytok')}>
                        Iný nábytok
                    </NavLink>
                </ColStyles>
                <ColStyles
                    data-sal="fade"
                    data-sal-delay="600"
                    data-sal-duration='1000'
                    data-sal-easing="ease-out"
                >
                    <h3>KONTAKT</h3>
                    <p>
                        Ulička 334
                    </p>
                    <p>
                        919 51 Špačince
                    </p>
                    <p>
                        Slovensko
                    </p>
                    <p>
                        info@kuchyne-turansky.sk
                    </p>
                    <p>
                        +421 905 784 087
                    </p>
                </ColStyles>
                <ColStyles
                    data-sal="fade"
                    data-sal-delay="800"
                    data-sal-duration='1000'
                    data-sal-easing="ease-out"
                >
                    <h3>SOCIÁLNE SIETE</h3>

                    <NavLink>
                        Facebook
                    </NavLink>
                    <NavLink>
                        Instagram
                    </NavLink>
                </ColStyles>
            </RowStyles>
        </FooterContainer>
    )
}

export default Footer
