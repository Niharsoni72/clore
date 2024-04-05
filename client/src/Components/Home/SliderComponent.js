import React, { Fragment } from 'react';
import '../../CSS/Home/SliderComponent.css';
import slide1 from '../../image/slide-1.jpg';
import slide2 from '../../image/slide-2.jpg';
import slide3 from '../../image/slide-3.jpg';
import slide4 from '../../image/slide-4.jpg';


export const SliderComponent = () => {
    return (
        <Fragment>
            <div className="slider-container">
                <div className="slider">
                    <div className="slides">
                        <div id="slides__1" className="slide">
                            <span className='image_text'> Great Lookbook 2K24 </span>
                            <img src={slide1} className="slider_image" />
                            <a className="slide__prev" href="#slides__4" title="Next"></a>
                            <a className="slide__next" href="#slides__2" title="Next"></a>
                        </div>
                        <div id="slides__2" className="slide">
                            <span className='image_text'> Stylish Coats </span>
                            <img src={slide2} className="slider_image" />
                            <a className="slide__prev" href="#slides__1" title="Prev"></a>
                            <a className="slide__next" href="#slides__3" title="Next"></a>
                        </div>
                        <div id="slides__3" className="slide">
                            <span className='image_text'>Trendy Collection</span>
                            <img src={slide3} className="slider_image" />
                            <a className="slide__prev" href="#slides__2" title="Prev"></a>
                            <a className="slide__next" href="#slides__4" title="Next"></a>
                        </div>
                        <div id="slides__4" className="slide">
                            <img src={slide4} className="slider_image" />
                            <a className="slide__prev" href="#slides__3" title="Prev"></a>
                            <a className="slide__next" href="#slides__1" title="Prev"></a>
                        </div>
                    </div>
                    {/* <div className="slider__nav">
                        <a className="slider__navlink" href="#slides__1"></a>
                        <a className="slider__navlink" href="#slides__2"></a>
                        <a className="slider__navlink" href="#slides__3"></a>
                        <a className="slider__navlink" href="#slides__4"></a>
                    </div> */}
                </div>
            </div>
        </Fragment>
    )
}
