import React from "react";
import Header from "../HomePage/Header/Header";
import Intro from "../HomePage/Intro/Intro";
import "./barchaToidalar.scss";
import keyslar from "../../assets/keyslar.png";
import Footer from "../HomePage/Footer/Footer";

// xamma rasmni import qilib otirmadim --------------------------------------------------------------------

function BarchaToifalar() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="bar__main-wrapper">
          <Intro />
          <ul className="bar__list">
            <li className="bar__item">
              <img className="bar__item-img" src={keyslar} alt="keyslar img" />
              <h3 className="bar__item-title">
                Shaxsiy kompyuter uchun keyslar
              </h3>
              <p className="bar__item-text">232 ta maxsulot</p>
            </li>
            <li className="bar__item">
              <img className="bar__item-img" src={keyslar} alt="keyslar img" />
              <h3 className="bar__item-title">Laptop Notebooklar</h3>
              <p className="bar__item-text">1234 ta maxsulot</p>
            </li>
            <li className="bar__item">
              <img className="bar__item-img" src={keyslar} alt="keyslar img" />
              <h3 className="bar__item-title">
                Shaxsiy kompyuter uchun monitorlar
              </h3>
              <p className="bar__item-text">654 ta maxsulot</p>
            </li>
            <li className="bar__item">
              <img className="bar__item-img" src={keyslar} alt="keyslar img" />
              <h3 className="bar__item-title">Quloqchinlar</h3>
              <p className="bar__item-text">321 ta maxsulot</p>
            </li>
            <li className="bar__item">
              <img className="bar__item-img" src={keyslar} alt="keyslar img" />
              <h3 className="bar__item-title">
                Shaxsiy kompyuter uchun keyslar
              </h3>
              <p className="bar__item-text">232 ta maxsulot</p>
            </li>
            <li className="bar__item">
              <img className="bar__item-img" src={keyslar} alt="keyslar img" />
              <h3 className="bar__item-title">Mishkalar</h3>
              <p className="bar__item-text">352 ta maxsulot</p>
            </li>
            <li className="bar__item">
              <img className="bar__item-img" src={keyslar} alt="keyslar img" />
              <h3 className="bar__item-title">Aksesuarlar</h3>
              <p className="bar__item-text">2453 ta maxsulot</p>
            </li>
            <li className="bar__item">
              <img className="bar__item-img" src={keyslar} alt="keyslar img" />
              <h3 className="bar__item-title">Kovreklar</h3>
              <p className="bar__item-text">231 ta maxsulot</p>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BarchaToifalar;
