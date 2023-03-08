import React from "react";
import "./chiqishDesktop.scss";
import { useState, useEffect } from "react";

function ChiqishDesktop() {
  const [authToken, setAuthToken] = useState(null);
  const [name, setName] = useState("");

  const clearLocalStorage = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedAuthToken = localStorage.getItem("name");

    if (storedAuthToken) {
      setAuthToken(storedAuthToken);
    }

    if (storedName) {
      setName(storedName);
    }
  }, []);

  return (
    <>
      <div className="desktop-chiqish__wrapper">
        <div className="desktop-chiqish-name-wrapper">
          <p className="desktop-chiqish__title">{name}</p>
          <button onClick={clearLocalStorage} className="desktop-chiqish__button">Chiqish</button>
        </div>
        <ul className="chiqish-list">
          <li className="chiqish-item chiqish-item--kontact">
            Shaxsiy ma'lumotlar
          </li>
          <li className="chiqish-item chiqish-item--buyurtmalar">
            Mening buyurtmalarim
          </li>
          <li className="chiqish-item chiqish-item--favourite">Sevimlilar</li>
          <li className="chiqish-item chiqish-item--location">Manzillar</li>
          <li className="chiqish-item chiqish-item--chiqish"></li>
        </ul>
      </div>
    </>
  );
}

export default ChiqishDesktop;
