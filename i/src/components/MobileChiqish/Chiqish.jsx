import React from "react";
import "./chiqish.scss";

function Chiqish() {
  const clearLocalStorage = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
      <ul className="chiqish-list">
        <li className="chiqish-item chiqish-item--kontact">
          Shaxsiy ma'lumotlar
        </li>
        <li className="chiqish-item chiqish-item--buyurtmalar">
          Mening buyurtmalarim
        </li>
        <li className="chiqish-item chiqish-item--favourite">Sevimlilar</li>
        <li className="chiqish-item chiqish-item--location">Manzillar</li>
        <li className="chiqish-item chiqish-item--chiqish">
          <button onClick={clearLocalStorage} className="chiqish-btn">
            Chiqish
          </button>
        </li>
      </ul>
    </>
  );
}

export default Chiqish;
