import React from "react";
import "./slider.scss"
import "swiper/swiper.min.css";
import sliderMebelImg from "../../assets/sliderMebelImg.png";
import Swiper, { Navigation } from "swiper";

Swiper.use([Navigation]);

function SliderMebel() {
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
    // faqat 1 ta rasm borakan -----------------------------------------------------------------------------------
    
    <>
      <div className="sliderMobile">
        <div className="container">
          <div ref={mySwiper} className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img className="swiper-img" src={sliderMebelImg} alt="slider img" />
              </div>
              <div className="swiper-slide">
                <img className="swiper-img" src={sliderMebelImg} alt="slider img" />
              </div>
              <div className="swiper-slide">
                <img className="swiper-img" src={sliderMebelImg} alt="slider img" />
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

export default SliderMebel;
