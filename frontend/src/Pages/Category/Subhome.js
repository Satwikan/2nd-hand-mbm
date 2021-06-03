import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import ProductCard from "../../Components/cards/ProductCard";
// import { getCategory } from '../../Function/Category';
import { getsub } from "../../Function/Sub";

function CategoryHome() {
  const { slug } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setloading] = useState(false);
  const [sub, setsub] = useState({});

  useEffect(() => {
    setloading(true);
    getsub(slug).then((c) => {
      // console.log(c.data.category)
      // console.log(c.data.products)
      setsub(c.data.sub);
      setProduct(c.data.products);
      console.log(sub);
      console.log(product);
      setloading(false);
    });
  }, []);

  return (
    <div className="container fluid">
      <div className="row">
        <div className="col">
          {loading ? (
            <h4>loading</h4>
          ) : (
            <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
              {product.length} Product in "{sub.name}" Sub- category
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
