import React from "react";
import "./footer.scss";
import facebookLogo from "../../assets/facebookLogo.svg";
import instagramLogo from "../../assets/instagramLogo.svg";
import tiktokLogo from "../../assets/tiktokLogo.svg";
import telegramLogo from "../../assets/telegram.svg";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__list-wrapper">
            <ul className="footer__list">
              <li className="footer__item">
                <a className="footer__item-link" href="#">Hujjatlar</a>
                <a className="footer__item-link" href="#">Umumiy shartlar</a>
                <a className="footer__item-link" href="#">Ofertalar arxivi</a>
                <a className="footer__item-link" href="#">Nizom</a>
                <a className="footer__item-link" href="#">Guvohnoma</a>
              </li>
              <li className="footer__item">
                <a className="footer__item-link" href="#">Servis</a>
                <a className="footer__item-link" href="#">Do’konlar</a>
                <a className="footer__item-link" href="#">Biz haqimizda</a>
                <a className="footer__item-link" href="#">Hamkorlik uchun</a>
                <a className="footer__item-link" href="#">Qaytarish</a>
                <a className="footer__item-link" href="#">Promokodlar</a>
              </li>
              <li className="footer__item">
                <a className="footer__item-link" href="#">Mahsulotlar katalogi</a>
                <a className="footer__item-link" href="#">Katalog 1</a>
                <a className="footer__item-link" href="#">Katalog 1</a>
                <a className="footer__item-link" href="#">Katalog 2</a>
                <a className="footer__item-link" href="#">Katalog 2</a>
                <a className="footer__item-link" href="#">Katalog 3</a>
                <a className="footer__item-link" href="#">Katalog 3</a>
              </li>
              <li>
                <a href="#">Axbarot xizmati</a>
                <a href="#">contact.@nextstore.uz</a>
                <a href="#">+998 97 712 96 96</a>
                <a href="#">+998 95 503 09 09</a>
                <a href="#">Sag’bon 186, Olmazor tumani, Toshkent, O'zbekiston</a>
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
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
