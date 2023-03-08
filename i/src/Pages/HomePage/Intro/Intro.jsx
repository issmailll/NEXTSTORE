import React from "react";
import "./intro.scss";
import "swiper/swiper.min.css";
import sliderImg1m from "../../../assets/sliderImg-1.png";
import sliderMobileImg from "../../../assets/sliderMobileImg.png";
import Swiper, { Navigation } from "swiper";

Swiper.use([Navigation]);

function Intro() {
  React.useEffect(() => {
    if (mySwiper.current !== null) {
      new Swiper(mySwiper.current, {
        slidesPerView: 1,
        spaceBetween: 2500,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  }, []);

  const mySwiper = React.useRef(null);

  return (
    // SLIDER ICHIDAGI TEXTLARNI OLIB BO'LMADI RASM QILIB QO'YVURDIM ---------------------------------------------

    <>
      <div className="intro">
        <div className="container">
          <div ref={mySwiper} className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img
                  className="swiper-img"
                  src={sliderImg1m}
                  alt="slider img"
                />
                <img
                  className="swiper-mobile-img"
                  src={sliderMobileImg}
                  alt="slider mobile"
                />
              </div>

              <div className="swiper-slide">
                <img
                  className="swiper-img"
                  src={sliderImg1m}
                  alt="slider img"
                />
                <img
                  className="swiper-mobile-img"
                  src={sliderMobileImg}
                  alt="slider mobile"
                />
              </div>

              <div className="swiper-slide">
                <img
                  className="swiper-img"
                  src={sliderImg1m}
                  alt="slider img"
                />
                <img
                  className="swiper-mobile-img"
                  src={sliderMobileImg}
                  alt="slider mobile"
                />
              </div>
            </div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
