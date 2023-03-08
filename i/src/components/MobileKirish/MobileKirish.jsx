import React from "react";
import "./mobileKirish.scss";
import profileImg from "../../assets/profile-img.svg";
import ModalAA from "../../Pages/HomePage/MyModal/MyModal";
import { useState, useEffect } from "react";
import Chiqish from "../MobileChiqish/Chiqish";

function MobileKirish() {
  const [modalShow, setModalShow] = React.useState(false);
  const [authToken, setAuthToken] = useState(null);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedmobile = localStorage.getItem("mobile");
    const storedAuthToken = localStorage.getItem("mobile");

    if (storedAuthToken) {
      setAuthToken(storedAuthToken);
    }

    if (storedName) {
      setName(storedName);
    }

    if (storedmobile) {
      setMobile(storedmobile);
    }
  }, []);

  return (
    <>
      <div className="mobKirish">
        {/*  */}
        {authToken ? (
          <div onClick={toggleProfile} className="img-main-wrapper">
            <div className="img__wrapper">
              <img
                className="header-main__profile-img"
                src={profileImg}
                alt="profile-img"
              />
              <div className="img__number-wrapper">
                <p className="img__name">{name}</p>
                <p className="img__number">{mobile}</p>
              </div>
            </div>
            {showProfile && <Chiqish />}
          </div>
        ) : (
          <button onClick={() => setModalShow(true)} className="mobKirish__btn">
            Hisobga kirish
          </button>
        )}
        <ModalAA show={modalShow} onHide={() => setModalShow(false)} />
        {/*  */}
        <div className="mobKirish__input-wrapper">
          <label className="mobKirish__label" htmlFor="uzLang">
            <input
              className="mobKirish__input"
              type="radio"
              id="uzLang"
              name="lang"
            />
            O’zbekcha
          </label>
          <label className="mobKirish__label" htmlFor="ruLang">
            <input
              className="mobKirish__input"
              type="radio"
              id="ruLang"
              name="lang"
            />
            Ruscha
          </label>
        </div>

        <h3 className="mobKirish__title">Bo’limlar</h3>
        <ul className="mobKirish__list">
          <li className="mobKirish__item mobKirish__item--rightArrow">
            Kategoriyalar
          </li>
          <li className="mobKirish__item mobKirish__item--rightArrow">
            Mahsulotlar katalogi
          </li>
          <li className="mobKirish__item mobKirish__item--rightArrow">
            Xizmatlarimiz
          </li>
          <li className="mobKirish__item">Nasiya savdo</li>
          <li className="mobKirish__item">Biz haqimizda </li>
        </ul>
        <p className="mobKirish__btm-text">Axbarot xizmati</p>
        <a className="mobKirish__link" href="#">
          contact.@nextstore.uz
        </a>
        <a className="mobKirish__link" href="#">
          +998 95 503 09 09
        </a>
      </div>
    </>
  );
}

export default MobileKirish;
