import React from 'react'
import { navigate } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll'

import { FooterContainer, RowStyles, ColStyles, NavLink, Watermark, SocialLink } from './footer.styles'

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
                        <a href="mailto:info@kuchyne-turansky.sk">info@kuchyne-turansky.sk</a>
                    </p>
                    <p>
                        <a href="tel:+421 905 784 087">+421 905 784 087</a>

                    </p>
                </ColStyles>
                <ColStyles
                    data-sal="fade"
                    data-sal-delay="800"
                    data-sal-duration='1000'
                    data-sal-easing="ease-out"
                >
                    <h3>SOCIÁLNE SIETE</h3>

                    <SocialLink href='https://www.facebook.com/Stol%C3%A1rstvo-Turansk%C3%BD-162273167167098/'>
                        Facebook
                    </SocialLink>

                </ColStyles>
            </RowStyles>
            <Watermark
                data-sal="fade"
                data-sal-duration='500'
                data-sal-easing="ease-out"
            >
                © 2020 kuchyne-turansky.sk | Web created by <a href="https://advision.sk/">AdVision Digital Marketing</a>
            </Watermark>
        </FooterContainer>
    )
}

export default Footer
