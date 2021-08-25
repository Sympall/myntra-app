import React from "react";
import "./Styles.scss";
import { Product } from "../../../shared/Types";
import { Card } from "../../organism";

interface ICardGridProps {
  productList: Product[];
}

function CardGrid({ productList: produceList }: ICardGridProps) {
  return (
    <div className="card-grid-wrapper">
      {produceList.map((p) => (
        <Card
          key={p.productName}
          brand={p.brand}
          imgSrc={p.searchImage}
          name={p.productName}
          price={p.price}
          discountLabel={p.discountDisplayLabel}
          mrp={p.mrp}
        />
      ))}
    </div>
  );
}

export default React.memo(CardGrid);
