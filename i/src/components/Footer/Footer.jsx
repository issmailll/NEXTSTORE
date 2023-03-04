import React from "react";
import "./footer.scss";
import facebookLogo from "../../assets/facebookLogo.svg";
import instagramLogo from "../../assets/instagramLogo.svg";
import tiktokLogo from "../../assets/tiktokLogo.svg";
import telegramLogo from "../../assets/teleframLogo.svg";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__list-wrapper">
            <ul className="footer__list">
              <li className="footer__item footer__item-xujjatlar">
                <h3 className="footer__item-title">Hujjatlar</h3>
                <a className="footer__item-link" href="#">Umumiy shartlar</a>
                <a className="footer__item-link" href="#">Ofertalar arxivi</a>
                <a className="footer__item-link" href="#">Nizom</a>
                <a className="footer__item-link" href="#">Guvohnoma</a>
              </li>
              <li className="footer__item footer__item-servis">
                <h3 className="footer__item-title">Servis</h3>
                <a className="footer__item-link" href="#">Do’konlar</a>
                <a className="footer__item-link" href="#">Biz haqimizda</a>
                <a className="footer__item-link" href="#">Hamkorlik uchun</a>
                <a className="footer__item-link" href="#">Qaytarish</a>
                <a className="footer__item-link" href="#">Promokodlar</a>
              </li>
              <li className="footer__item footer__item-katalog">
                <h3 className="footer__item-title">Mahsulotlar katalogi</h3>
                <a className="footer__item-link" href="#">Katalog 1</a>
                <a className="footer__item-link" href="#">Katalog 1</a>
                <a className="footer__item-link" href="#">Katalog 2</a>
                <a className="footer__item-link" href="#">Katalog 2</a>
                <a className="footer__item-link" href="#">Katalog 3</a>
                <a className="footer__item-link" href="#">Katalog 3</a>
              </li>
              <li className="footer__item footer__item-social">
                <h3 className="footer__item-title">Axbarot xizmati</h3>
                <a className="footer__item-link" href="#">contact.@nextstore.uz</a>
                <a className="footer__item-link footer__item-link--number" href="#">+998 97 712 96 96</a>
                <a className="footer__item-link" href="#">+998 95 503 09 09</a>
                <a className="footer__item-link" href="#">Sag’bon 186, Olmazor tumani, Toshkent, O'zbekiston</a>

                {/* social ------------------------------------------------------------------------ */}

                <ul className="footer__social-list">
                    <li className="footer__social-item">
                        <a className="footer__social-link" href="#">
                            <img className="footer__social-img" src={facebookLogo} alt="facebook logo" />
                        </a>
                    </li>
                    <li className="footer__social-item">
                        <a className="footer__social-link" href="#">
                            <img className="footer__social-img" src={instagramLogo} alt="instagram logo" />
                        </a>
                    </li>
                    <li className="footer__social-item">
                        <a className="footer__social-link" href="#">
                            <img className="footer__social-img" src={telegramLogo} alt="telegram logo" />
                        </a>
                    </li>
                    <li className="footer__social-item">
                        <a className="footer__social-link" href="#">
                            <img className="footer__social-img" src={tiktokLogo} alt="tik tok logo" />
                        </a>
                    </li>
                </ul>

                {/* social ------------------------------------------------------------------------ */}

              </li>
            </ul>
          </div>
          <div className="footer-btm">
            <p className="footer-btm__text">2022  Nextstore.com</p>
            <p className="footer-btm__text footer-btm__text--poweredBy">Powered by </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
