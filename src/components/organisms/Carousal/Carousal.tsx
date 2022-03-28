import React, { FC, useRef } from "react";
import Slider from "react-slick";
import { Flex, Icon, Click } from "vcc-ui";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousal: FC<{slideToShow: number; }> = ({ slideToShow, children }) => {
    const customSlider = useRef<Slider>(null);
    const settings = {
      slidesToShow: slideToShow < 4 ? slideToShow : 4,
      dots: false,
      speed: 300,
      accessibility: true,
      className: 'carousal-container',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: slideToShow < 4 ? slideToShow : 4,
            dots: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: slideToShow < 2 ? slideToShow : 2,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.2,
            dots: true,
          },
        },
      ],
    };

    return (
        <Flex extend={{ margin: '0 6px' }}>
            <Slider ref={customSlider} {...settings}>
                {children}
            </Slider>
            <Flex extend={{ untilL: { display: 'none' }, fromL: { flexDirection: 'row', justifyContent: 'flex-end', marginRight: '12px' }}}>
                <Click
                    aria-label="previous"
                    onClick={() => customSlider?.current?.slickPrev()}
                    >
                    <Icon type="media-previous-32" />
                </Click>
                <Click
                    aria-label="next"
                    onClick={() => customSlider?.current?.slickNext()}
                    >
                    <Icon type="media-next-32" />
                </Click>
            </Flex>
        </Flex>)
}