import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getProductss, getRelated } from "../Function/Prodt";

import { useParams } from "react-router-dom";
import SingleProduct from "../Components/cards/SingleProduct";
import ProductCard from "../Components/cards/ProductCard";
const Product = () => {
  const style = { "letter-spacing": "2px", "text-align": "center" };

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
      getRelated(res.data._id).then((res) => setRelated(res.data));
    });
  };

  console.log(related);

  return (
    <div className="container-fluid" style={style}>
        <br/>
        <br/>
        <br/>

      <h2>Product Display</h2>
      <div className="row pt-4">
        <SingleProduct product={product} />
      </div>

      <div className="row p-5">
        <div style={style}>
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
};

export default Product;
