import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getProductss, getrelated } from "../Function/Prodt";

import { useParams } from "react-router-dom";
import SingleProduct from "../Components/cards/SingleProduct";
import ProductCard from "../Components/cards/ProductCard";

function Product() {
  const [product, setProduct] = useState({});
  const [related, setRelated] = useState([]);

  var { slug } = useParams();
  // console.log(slug);
  // const {slug} = match.params

  useEffect(() => {
    loadSingleProduct();
  }, [slug]);

  const loadSingleProduct = () => {
    getProductss(slug).then((res) => {
      setProduct(res.data);
      console.log(res.data._id);
      getrelated(res.data._id).then((res) => setRelated(res.data));
    });
  };

  console.log(related);

  return (
    <div className="container-fluid">
      <div className="row pt-4">
        <SingleProduct product={product} />
      </div>

      <div className="row p-5">
        <div
          style={{ fontWeight: "bold", fontFamily: "cursive" }}
          className="col text-center pt-5 pb-5"
        >
          <hr />
          <h4>Related Products</h4>
          <hr />
        </div>
      </div>
      <div className="row pb-5">
        {related.length ? (
          related.map((p) => (
            <div className="col-md-4 container">
              <ProductCard p={p} />
            </div>
          ))
        ) : (
          <div className="text-center col">😓 There are no products.</div>
        )}
      </div>
    </div>
  );
}

export default Product;
