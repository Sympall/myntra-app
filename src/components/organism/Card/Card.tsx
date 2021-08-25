import React from "react";
import "./Card.scss";

// only taking props that are displayed in card
// avoiding unnecessary product info in prop
interface ICardProps {
  imgSrc: string;
  brand: string;
  name: string;
  price: number;
  mrp?: number;
  discountLabel?: string;
}

function Card({ brand, imgSrc, name, price, discountLabel, mrp }: ICardProps) {
  return (
    <div className="product-card-wrapper">
      <img src={imgSrc} alt="product" className="product-img" />
      <div className="product-info">
        <div className="brand-label">{brand}</div>
        <div className="name-label">{name}</div>
        <div className="price-info">
          <span className="price-label">Rs. {price}</span>
          {mrp && <span className="mrp">Rs.{mrp}</span>}
          {discountLabel && (
            <span className="discount-label">{discountLabel}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
