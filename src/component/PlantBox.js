import React from "react";
import "../App.css";
const PlantBox = ({ imgUrl, name }) => {
  return (
    <>
      <div className="wrapper">
        <div className="image">
          <img src={imgUrl} />
        </div>
        <div className="name">
          <h3 >{name}</h3>
        </div>
      </div>
    </>
  );
};

export default PlantBox;
