import React from "react";
import "./brends.scss";
import hp from "../../../assets/hp.svg";
import acer from "../../../assets/acer.svg";
import asus from "../../../assets/asusu.svg";
import samsung from "../../../assets/samsung.svg";
import apple from "../../../assets/apple.svg";
import msu from "../../../assets/msu.svg";
import mi from "../../../assets/mi.svg";
import vivo from "../../../assets/vivo.svg";
import empty from "../../../assets/empty.svg";

function Brends() {
  return (
    <>
      <div className="brends">
        <div className="container">
          <h2 className="brends__title">Brendlar bo’yicha</h2>
          <ul className="brends__list">
            <li className="brends__item">
              <img className="brends__img" src={hp} alt="hp brand" />
            </li>
            <li className="brends__item">
              <img className="brends__img" src={acer} alt="acer logo" />
            </li>
            <li className="brends__item">
              <img className="brends__img" src={asus} alt="asus logo" />
            </li>
            <li className="brends__item">
              <img className="brends__img" src={samsung} alt="samsung logo" />
            </li>
            <li className="brends__item">
              <img className="brends__img" src={apple} alt="apple logo" />
            </li>
            <li className="brends__item">
              <img className="brends__img" src={msu} alt="msu logo" />
            </li>
            <li className="brends__item">
              <img className="brends__img" src={mi} alt="mi logo" />
            </li>
            <li className="brends__item">
              <img className="brends__img" src={vivo} alt="vivo logo" />
            </li>
            <li className="brends__item">
              <img className="brends__img" src={empty} alt="empty logo" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Brends;
