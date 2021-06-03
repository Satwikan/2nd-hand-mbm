import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import ProductCard from "../../Components/cards/ProductCard";
import { getCategory } from "../../Function/Category";

const CONSTANTS = require("../../cssVariables");

function CategoryHome() {
  const { slug } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setloading] = useState(false);
  const [category, setCategory] = useState({});

  useEffect(() => {
    setloading(true);
    getCategory(slug).then((c) => {
      // console.log(c.data.category)
      // console.log(c.data.products)
      setCategory(c.data.category);
      setProduct(c.data.products);
      console.log(category);
      console.log(product);
      setloading(false);
    });
  }, []);
  const style = {
    "background-color": CONSTANTS.background,
    color: CONSTANTS.text,
  };
  return (
    <div className="container fluid" style={style}>
      <div className="row">
        <div className="col">
          {loading ? (
            <h4>loading</h4>
          ) : (
            <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
              {product.length} Product in "{category.name}" category
            </h4>
          )}
        </div>
      </div>
      <div className="row">
        {product.map((c) => (
          <div className="col-md-4" key={c._id}>
            <ProductCard p={c} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryHome;
