import React from 'react'
import "../App.css";

const Rigth_Image_component = ({ imgUrl, overlayUrl }) => {
    return (
        <>
          <div className="product-card w-h">
            <div className="img-box">
              <img src={imgUrl} />
              <div className="overlay">
              <div className="overlay-img">
              <img src={overlayUrl}/>
              </div>
            <button className="addTocart">Add to cart</button>
              </div>
            </div>
           
          </div>
        </>
      );
}

export default Rigth_Image_component
