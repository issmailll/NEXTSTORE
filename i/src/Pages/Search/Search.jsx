import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import korzinaImg from "../../assets/shopping-icon.svg";
import Header from "../HomePage/Header/Header";
import Footer from "../HomePage/Footer/Footer";
import "./search.scss";
import Tavsiyalar from "../../components/Tavsiyalar/Tavsiyalar";

const Search = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("q");

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `http://localhost:3000/products?q=${searchTerm}`
      );
      const data = await response.json();
      setProducts(data);
      console.log(data);
    };
    fetchProducts();
  }, [searchTerm]);

  return (
    <div className="container">
      <Header />
      <div className="search__main">
        {products.length > 0 ? (
          <ul className="search__list">
            {products.map((product) => (
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
          </ul>
        ) : (
          <h3 className="text-center text-uppercase">
            siz qidirgan mahsulot topilmadi.
          </h3>
        )}
      <Tavsiyalar />
      </div>
      <Footer />
    </div>
  );
};

export default Search;
