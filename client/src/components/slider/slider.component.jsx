import React, { useState } from 'react'
import { Carousel, CarouselItem, CarouselIndicators, CarouselControl } from 'reactstrap'
import styled from 'styled-components'

import CustomImage from '../custom-image/custom-image.component'

const CustomSlider = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    return (
        <SliderContainer>
            <Carousel
                id='galeria'
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                className={'gallery-styles'}
                style={{
                    maxWidth: "100%",
                    height: '500px',
                    background: "black"
                }}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {items.map((item, idx) => {

                    return (
                        <CarouselItem
                            onExiting={() => setAnimating(true)}
                            onExited={() => setAnimating(false)}
                            key={idx}
                        >
                            <CustomImage src={process.env.ENDPOINT + "/" + item.imagePath} alt={item.alt} />
                        </CarouselItem>
                    );
                })}
                <CarouselControl className={`control`} direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl className={`control`} direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </SliderContainer>
    )
}

const SliderContainer = styled.div`
.gallery-styles {
    width: 100%;
    height: 30vw;
    background-color: var(--first-service);

    .carousel-item {
        height: 30vw;

    }

        img {
            height: 100% !important;
            object-fit: cover !important;
        }
    }

    ol {
        li {
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
            border: 4px solid #fff;
            background-color: #fff;
            margin: 0 1rem;

            @media all and (max-width: 500px) {
                width: .7rem;
                height: .7rem;
            }
        }
    }

    @media all and (max-width: 800px) {
        .gallery-styles {
            width: 100%;
            height: 60vw;
            background-color: var(--first-service);

                .carousel-item {
                    height: 60vw !important;
                }
            }
        }
}
`

export default CustomSlider