import React, { useState, useEffect } from "react";
import "./tavsiyalar.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import korzinaImg from "../../assets/shopping-icon.svg";

function Tavsiyalar() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  const handleOnSlideChange = (event) => {};

  const responsive = {
    0: { items: 1 },
    768: { items: 3 },
    1024: { items: 5 },
  };

  const handlePrevClick = () => {
    carousel.slidePrev();
  };

  const handleNextClick = () => {
    carousel.slideNext();
  };

  let carousel;

  return (
    <>
      <div className="alice-carousel-container">
        <h2 className="tavsiyalar__title">Siz uchun tavsiyalar</h2>
        <ul>
          <AliceCarousel
            mouseTracking
            items={products.map((product, index) => (
              <li className="search__item" key={product.id}>
                {/* faqat 1ta img qo'yib qoydim ----------------------------------------------------------------- */}
                <img
                  width="180"
                  height="180"
                  className="search__img"
                  src={product.img}
                  alt="product img"
                />
                <p className="search__item-cost">{product.cost} so'm</p>
                <p className="search__item-description">
                  {" "}
                  {product.description}{" "}
                </p>
                <p className="search__item-orders">
                  {" "}
                  {product.orders} ta buyurtma
                </p>
                <div className="search__link-wrapper">
                  <a className="search__link" href="#">
                    Sotib olish
                  </a>
                  <img
                    className="search__shopping-icon"
                    src={korzinaImg}
                    alt="shopping icon"
                  />
                </div>
              </li>
            ))}
            responsive={responsive}
            autoPlay
            autoPlayInterval={2000}
            disableButtonsControls
            onSlideChanged={handleOnSlideChange}
            buttonsDisabled
            dotsDisabled
            ref={(el) => (carousel = el)}
            renderPrevButton={() => (
              <button
                onClick={handlePrevClick}
                className="alice-carousel-prev-btn"
              >
                Prev
              </button>
            )}
            renderNextButton={() => (
              <button
                onClick={handleNextClick}
                className="alice-carousel-next-btn"
              >
                Next
              </button>
            )}
          />
        </ul>
        <div className="carousel-buttons">
          <button
            className="carousel-btn carousel-btn--prev"
            onClick={handlePrevClick}
          ></button>
          <button
            className="carousel-btn carousel-btn--next"
            onClick={handleNextClick}
          ></button>
        </div>
      </div>
    </>
  );
}

export default Tavsiyalar;
