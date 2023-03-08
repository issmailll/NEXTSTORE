import React from "react";
import "./header.scss";
import siteLogo from "../../../assets/site-logo.svg";
import favouriteIcon from "../../../assets/favourite-icon.svg";
import shoppingIcon from "../../../assets/shopping-icon.svg";
import profileImg from "../../../assets/profile-img.svg";
import Catalog from "../Catalog/Catalog";
import { useState, useEffect } from "react";
import ModalAA from "../MyModal/MyModal";
import MobileKirish from "../../../components/MobileKirish/MobileKirish";
import ChiqishDesktop from "../../../components/DesktopChiqish/ChiqishDesktop";

// ---------------------------------------------------------IMPORTS---------------------------------

function Header() {
  const [showCatalog, setShowCatalog] = useState(false);

  const [showChiqish, setShowChiqish] = useState(false);

  const [modalShow, setModalShow] = React.useState(false);

  const [authToken, setAuthToken] = useState(null);

  const [showMenu, setShowMenu] = useState(false);


  const handleProfileImgClick = () => {
    setShowChiqish(!showChiqish);
  };

  const toggleCatalog = () => {
    setShowCatalog(!showCatalog);
  };

  useEffect(() => {
    const storedAuthToken = localStorage.getItem("mobile");
    if (storedAuthToken) {
      setAuthToken(storedAuthToken);
    }
  }, []);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="header">
        <div className="header__container container">
          {/* header top -------------------------------------------------------------------------------- */}

          <div className="header-top">
            <a className="header-top__link" href="#">
              Aloqa uchun
            </a>
            <select className="header-top__select">
              <option>uz</option>
              <option>ru</option>
              <option>en</option>
            </select>
          </div>

          {/* header top -------------------------------------------------------------------------------- */}
          {/* header main ------------------------------------------------------------------------------- */}
          <div className="header-main">
            <div className="header-main__logo-wrapper">
              <a className="header-main__logo-link" href="#">
                <img
                  className="header-main__logo"
                  src={siteLogo}
                  alt="site-logo"
                />
              </a>
              <button onClick={toggleCatalog} className="header-main__btn">
                Katalog
              </button>
              {showCatalog && <Catalog />}

              <button
                className="header-main__burger-btn"
                onClick={handleMenuClick}
              >
                {showMenu ? "X" : "☰"}
              </button>
              {showMenu && <MobileKirish />}
            </div>

            {/* ------------------------------------------------------------------------------------------- */}

            <div className="header-main__search-wrapper">
              <label
                className="header-main__input-label"
                htmlFor="header-main__search-input"
              >
                <input
                  className="header-main__search-input"
                  type="search"
                  placeholder="Maxsulotlarni izlash"
                />
                <button className="header-main__input-btn"></button>
              </label>
              <nav className="header-main__navbar">
                <a className="header-main__favourite-link" href="#">
                  <img src={favouriteIcon} alt="favourite-icon" />
                </a>
                <a className="header-main__korzina-icon" href="#">
                  <img src={shoppingIcon} alt="korzina-icon" />
                </a>
                <div>
                  {authToken ? (
                    <img
                      onClick={handleProfileImgClick}
                      className="header-main__profile-img"
                      src={profileImg}
                      alt="profile-img"
                    />
                  ) : (
                    <button
                      onClick={() => setModalShow(true)}
                      className="header-main__kirish-btn"
                    >
                      Kirish
                    </button>
                  )}
                  <ModalAA
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                  {showChiqish && <ChiqishDesktop />}
                </div>
              </nav>
            </div>
          </div>
          {/* header main ------------------------------------------------------------------------------- */}
        </div>
      </div>
    </>
  );
}

export default Header;
