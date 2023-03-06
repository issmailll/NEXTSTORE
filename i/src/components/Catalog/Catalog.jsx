import React from "react";
import "./catalog.scss";

function Catalog() {
  return (
    <>
      <div className="catalog">
        {/* katalog title -------------------------------------------------------------------------- */}

        <ul className="catalog__title-list">
          <li className="catalog__title catalog__title--aksiya">Aksiya</li>
          <li className="catalog__title">Kompyuterlar va notebooklar</li>
          <li className="catalog__title">Telefonlar</li>
          <li className="catalog__title">Maishiy texnika</li>
          <li className="catalog__title">Erkaklar uchun kiyim</li>
          <li className="catalog__title">Ayollar uchun kiyimlar</li>
          <li className="catalog__title">Bolalar uchun </li>
          <li className="catalog__title">Avtomobil mahsulotlari</li>
          <li className="catalog__title">Go'zallik va so'glik</li>
          <li className="catalog__title">Sport va o'yin-kulgi</li>
          <li className="catalog__title">Uy hayvonlari uchun tovarlar</li>
          <li className="catalog__title">Xobbi va ijodkorlik</li>
          <li className="catalog__title">Kantselyariya buyumlari</li>
          <li className="catalog__title">Maishiy kimyo</li>
          <li className="catalog__title">Sport va o'yin-kulgi</li>
          <li className="catalog__title">Uy hayvonlari uchun tovarlar</li>
          <li className="catalog__title">Aksesuarlar</li>
        </ul>

        {/* katalog title -------------------------------------------------------------------------- */}
        {/* katalog brendlari ---------------------------------------------------------------------- */}
        <div className="brandSerai-wrapper">
          <ul className="brend__list">
            <li className="brend__item">
              <h3 className="brend__item-title">Brendlar </h3>
            </li>
            <li className="bren__item-name">Samsung</li>
            <li className="bren__item-name">Vivo</li>
            <li className="bren__item-name">Tecno</li>
            <li className="bren__item-name">Realme</li>
            <li className="bren__item-name">Xiaomi</li>
            <li className="bren__item-name">Apple</li>
            <li className="bren__item-name">Artel</li>
            <li className="bren__item-name">Nokia</li>
            <li className="bren__item-name">Infinix</li>
            <li className="bren__item-name">OnePlus</li>
            <li className="bren__item-name">ZTE</li>
            <li className="bren__item-name">Blackview</li>
            <li className="bren__item-name">Oppo</li>
            <li className="bren__item-name">Ergo</li>
            <li className="bren__item-name">BQ</li>
            <li className="bren__item-name">Huawei</li>
            <li className="bren__item-name">Alcatel</li>
            <li className="bren__item-name">TCL</li>
            <li className="bren__item-name">Inoi</li>
            <li className="bren__item-name">
              <a href="#">Ko’proq</a>
            </li>
          </ul>

          {/* katalog brendlari ---------------------------------------------------------------------- */}

          <ul className="seria__list">
            <li className="seria__item">
              <h3 className="seria__item-title">Samsung brendi</h3>
              <p className="seria__item-text">S serialar</p>
              <p className="seria__item-text">A serialar</p>
              <p className="seria__item-text">Note serilar</p>
              <p className="seria__item-text">M serialar</p>
            </li>
            <li className="seria__item">
              <h3 className="seria__item-title">Redmi & Xiaomi</h3>
              <p className="seria__item-text">S serialar</p>
              <p className="seria__item-text">A serialar</p>
              <p className="seria__item-text">Note serilar</p>
              <p className="seria__item-text">M serialar</p>
            </li>
            <li className="seria__item">
              <h3 className="seria__item-title">Apple brendi</h3>
              <p className="seria__item-text">S serialar</p>
              <p className="seria__item-text">A serialar</p>
              <p className="seria__item-text">Note serilar</p>
              <p className="seria__item-text">M serialar</p>
            </li>
            <li className="seria__item">
              <h3 className="seria__item-title">Huawei</h3>
              <p className="seria__item-text">S serialar</p>
              <p className="seria__item-text">A serialar</p>
              <p className="seria__item-text">Note serilar</p>
              <p className="seria__item-text">M serialar</p>
            </li>
            <li className="seria__item">
              <h3 className="seria__item-title">Eng ommabop </h3>
              <p className="seria__item-text">S serialar</p>
              <p className="seria__item-text">A serialar</p>
              <p className="seria__item-text">Note serilar</p>
              <p className="seria__item-text">M serialar</p>
            </li>
            <li className="seria__item">
              <h3 className="seria__item-title">Eng arzonlari</h3>
              <p className="seria__item-text">S serialar</p>
              <p className="seria__item-text">A serialar</p>
              <p className="seria__item-text">Note serilar</p>
              <p className="seria__item-text">M serialar</p>
            </li>
            <li className="seria__item">
              <h3 className="seria__item-title">Huawei mobile</h3>
              <p className="seria__item-text">S serialar</p>
              <p className="seria__item-text">A serialar</p>
              <p className="seria__item-text">Note serilar</p>
              <p className="seria__item-text">M serialar</p>
            </li>
            <li className="seria__item">
              <h3 className="seria__item-title">Huawei mobile</h3>
              <p className="seria__item-text">S serialar</p>
              <p className="seria__item-text">A serialar</p>
              <p className="seria__item-text">Note serilar</p>
              <p className="seria__item-text">M serialar</p>
            </li>
            <li className="seria__item">
              <h3 className="seria__item-title">Huawei mobile</h3>
              <p className="seria__item-text">S serialar</p>
              <p className="seria__item-text">A serialar</p>
              <p className="seria__item-text">Note serilar</p>
              <p className="seria__item-text">M serialar</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Catalog;
