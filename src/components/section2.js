
import React, { useRef } from "react"
import Star from "../img/star.svg"
import Chronicle from "../img/chronicle 2.svg"
import Chronicle2 from "../img/chronicle 3.svg"
import Chronicle3 from "../img/chronicle 4.svg"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Arrow from "../img/arrow.svg"

import "../css/section2.css"

export default function MyComponent2(){
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
  
    const handlePrevSlide = () => {
        sliderRef.current.slickPrev();
    };
  
    const handleNextSlide = () => {
        sliderRef.current.slickNext();
    };
  
    return(
        <>
            <section className="about createflow" id = "about">
                
                <span className="about__info createflow__info">

                    <p className="about__text">
                        <span className="workflow">
                            <img src={Star} />
                            Workflow
                        </span>
                    </p>

                    <br/>
                    <b className="about__text create">

                        Create at the speed of thought.

                    </b>
                    <p className="about__tiny">Focus on your getting your thoughts out and crafting the best message while Chronicle does the heavy lifting for you</p>
                </span>

                <span className="techs">
                    <div className="slideshow-container">
                    <Slider ref={sliderRef} {...settings}>
                        <span className="box">
                            <img src={Chronicle} />
                            <span className="boxi">
                                <h3 className="box__title">
                                    A keyboard first experience.
                                </h3>
                                <p className="box__info">
                                    Powerful shortcuts and a keyboard-first workflow means you will get to your finish line in no time!
                                </p>
                            </span>
                        </span>

                        <span className="box">
                            <img src={Chronicle2} />
                            <span className="boxi">
                                <h3 className="box__title">
                                    Bullets to visuals in a click.
                                </h3>
                                <p className="box__info">
                                    Transform any block to any other and try different  options without any design hassle
                                </p>
                            </span>
                        </span>

                        <span className="box">
                            <img src={Chronicle3} />
                            <span className="boxi">
                                <h3 className="box__title">
                                    A powerful assistant just a click away.
                                </h3>
                                <p className="box__info">
                                Insert blocks, perform powerful actions and leverage the limitless power of AI - all without leaving your keyboard
                                </p>
                            </span>
                        </span>

                    </Slider>
                    <div className="slider-buttons">
                        <button className='button btn' onClick={handlePrevSlide}>
                            <span>
                                <img src={Arrow} />
                            </span>

                        </button>
                        <button className='button btn' onClick={handleNextSlide}>
                            <span>
                                <img src={Arrow} />
                            </span>
                        </button>
                    </div>
                </div>

                </span>

            </section>
            <br/>
        </>
    )
}