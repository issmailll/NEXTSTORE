import React from "react";
import "./category.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Category() {
  const [data, setdata] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/catalog")
      .then((response) => response.json())
      .then((data) => setdata(data))
      .catch((err) => console.log(err));
  }, []);

  function handleClick(event) {
    event.preventDefault();
    navigate(`/barchaToifalar`);
  }

  return (
    <>
      <div className="container">
        <div className="cat">
          <h2 className="cat__title">Kategoriyalar</h2>
          {/* rasmlarni figmadan linkini olomadim --------------------------------------------------------------- */}
          <ul className="cat__list">
            {data.map((el) => {
              return (
                <li onClick={handleClick} className="cat__item" key={el.id}>
                  <img
                    width="136"
                    height="136"
                    src={el.catImg}
                    alt="product images"
                  />
                  <h3 className="cat__item-title">{el.catTitle}</h3>
                </li>
              );
            })}
          </ul>
          <button onClick={handleClick} className="cat__btn">Batafsil</button>
        </div>
      </div>
    </>
  );
}

export default Category;
