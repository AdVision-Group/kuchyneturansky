import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import HeroSection from '../sections/hero/hero.component'
import CategoriesSection from '../sections/categories/categories.component' 
import PartnersSection from '../sections/partners/partners.component'

import ProjectOverviewSection from '../sections/project-overview/project-overview'
import AboutSection from '../sections/about/about.component'
import TestimonialSection from '../sections/testimonials/testimonials.component'

export const WhiteSpace = styled.div`
  height: 20rem;
  background-color: #fff;

  @media all and (max-width: 800px) {
    height: 10rem;
    @media all and (max-width: 500px) {
      height: 5rem;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Domov" />
    <HeroSection/>
    <CategoriesSection />
    <PartnersSection />

    <ProjectOverviewSection />
    <AboutSection />

    <WhiteSpace/>
    <TestimonialSection/>
  </Layout>
)

export default IndexPage
