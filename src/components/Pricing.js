import React from "react";
import "../App.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import DATA from "../DATA.json";

function Pricing() {
  const percentege = (data) => {
    let sum = 100 - (data.final_price * 100) / data.price;
    sum = Math.ceil(sum);
    return sum;
  };
  const quantity = (data) => {
    let sentence;
    if (data.qty < 10 && data.qty > 0) {
      sentence = "Under 10 left";
    } else if (data.qty === 0) {
      sentence = "0 item left";
    } else {
        sentence = 'more then 10 left'
    }
    return sentence;
  };
  return (
    <div className="container">
      {DATA.map((data) => (
        <div key={data.id} className="border">
          <div className="discount">{percentege(data)}% OFF</div>
            <p className='hot'>
              {quantity(data)}
              <span
                class="iconify"
                data-icon="mdi-fire"
                data-inline="false"
              ></span>
            </p>
          <Carousel className="images">
            <div>
              <img className="frontImage" src={data.img_front} alt="" />
            </div>
            <div>
              <img className="sideImage" src={data.img_side} alt="" />
            </div>
            <div>
              <img className="angleImage" src={data.img_angle} alt="" />
            </div>
          </Carousel>
          <div className="itemName">{data.name}</div>
          <div className="prices">
            <span className="oldPrice">${data.price} </span>
            <span className="currentPrice">${data.final_price} </span>
            <span className="shipping">+ Free Shipping </span>
            <br />
          </div>
          <div className="button">
            {data.qty ? (
              <button
                className="shopNow"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = data.link;
                }}
              >
                Shop Now!
              </button>
            ) : (
              <div className="soldOut">Sold out</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Pricing;
