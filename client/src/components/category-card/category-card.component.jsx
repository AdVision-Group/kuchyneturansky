import React from 'react'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import { Parallax } from 'react-scroll-parallax';

import {
    CategoryCardContainer,
    CategoryHeading,

} from './category-card-styles'


const CategoryCard = ({ category, imageData, black }) => {
    return (
        <Parallax
            y={category.y}
            tagOuter="figure"
        >
            <CategoryCardContainer >
                <Link to={category.slug}>
                    <Image alt={category.title} fluid={imageData.childImageSharp.fluid} />
                    <CategoryHeading black={black}>
                        <h2>{category.title}</h2>
                    </CategoryHeading>
                </Link>
            </CategoryCardContainer>
        </Parallax>
    )
}

export default CategoryCard

