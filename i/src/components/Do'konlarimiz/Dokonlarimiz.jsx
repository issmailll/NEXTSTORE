import React from "react";
import "./Dokonlarimiz.scss";
import elmakon from "../../assets/elmakon.svg";
import texnomart from "../../assets/texnomart.svg";
import mediapark from "../../assets/mediapark.svg";
import sandiq from "../../assets/sandiq.svg";
import goodzona from "../../assets/ggodzona.svg";
import unknown from "../../assets/unknown.svg";

function Dokonlarimiz() {
  return (
    <>
      <div className="dokon">
        <div className="container">
          <h2 className="dokon__title">Do'konlarimiz</h2>
          <ul className="dokon__list">
            <li className="dokon__item">
              <img className="dokon__item-img" src={elmakon} alt="elmakon logo" />
            </li>
            <li className="dokon__item">
              <img className="dokon__item-img" src={texnomart} alt="texnomart logo" />
            </li>
            <li className="dokon__item">
              <img className="dokon__item-img" src={mediapark} alt="mediapark logo" />
            </li>
            <li className="dokon__item">
              <img className="dokon__item-img" src={sandiq} alt="sandiq logo" />
            </li>
            <li className="dokon__item">
              <img className="dokon__item-img" src={goodzona} alt="goodzona logo" />
            </li>
            <li className="dokon__item">
              <img className="dokon__item-img" src={unknown} alt="unknown logo" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Dokonlarimiz;
