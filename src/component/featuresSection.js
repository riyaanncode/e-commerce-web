import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";

const FeaturesSection = ({ imgUrl, name, price, overlayUrl }) => {
  return (
    <>
      <div className="product-card">
        <div className="img-box">
          <img src={imgUrl} />
          <div className="overlay">
          <div className="overlay-img">
          <img src={overlayUrl}/>
          </div>
          <div className="icon">
          <FontAwesomeIcon icon={faEye} />
          <i class="fa-regular fa-eye"></i>
          </div>
          <button className="addTocart">Add to cart</button>
          </div>
        </div>
        <h3>{name}</h3>
        <span>{price}</span>
      </div>
    </>
  );
};

export default FeaturesSection;
