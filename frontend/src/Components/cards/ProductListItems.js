import React from "react";
import { Link } from "react-router-dom";

function ProductListItems({ product }) {
  const { price, category, subs } = product;
  console.log(category, subs);
  return (
    <ul className="list-group">
      <li className="list-group-item">
        Price{" "}
        <span className="label label-default label-pill pull-xs-right">
          {price} Rs
        </span>
      </li>

      {category && (
        <li className="list-group-item">
          Category{" "}
          <span className="label label-default label-pill pull-xs-right">
            {category.name}{" "}
          </span>
        </li>
      )}

      {subs && (
        <li className="list-group-item">
          Sub Categories
          {subs.map((p) => {
            <Link
              key={p._id}
              className="label label-default label-pill pull-xs-right"
            >
              {p.name}
            </Link>;
          })}
        </li>
      )}
    </ul>
  );
}

export default ProductListItems;
