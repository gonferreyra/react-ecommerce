import React from "react";

import imgtest from "../../images/airjordan1.png";
import "./Style.css";
import { BsFillCartCheckFill } from "react-icons/bs";

const SneakersSection = () => {
  return (
    <div className="sneakers__section">
      <div className="sneakers__container">
        <div className="card">
          <div className="card__image">
            <img src={imgtest} />
          </div>
          <div className="card__info__container">
            <div className="card__name">
              <p>nike</p>
            </div>
            <div className="card__price">
              <p>$ 250</p>
            </div>
            <div className="card__hover__container">
              <div className="card__btn">
                <p>add to cart</p>
                {/* componene carrito dentro de un link */}
              </div>
              <div className="card__icons">
                <p>other icons</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__image">
            <img src={imgtest} />
          </div>
          <div className="card__info__container">
            <div className="card__name">
              <p>nike</p>
            </div>
            <div className="card__price">
              <p>$ 250</p>
            </div>
            <div className="card__hover__container">
              <div className="card__btn">
                <p>add to cart</p>
                {/* componene carrito dentro de un link */}
              </div>
              <div className="card__icons">
                <p>other icons</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__image">
            <img src={imgtest} />
          </div>
          <div className="card__info__container">
            <div className="card__name">
              <p>nike</p>
            </div>
            <div className="card__price">
              <p>$ 250</p>
            </div>
            <div className="card__hover__container">
              <div className="card__btn">
                <p>add to cart</p>
                {/* componene carrito dentro de un link */}
              </div>
              <div className="card__icons">
                <p>other icons</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SneakersSection;
