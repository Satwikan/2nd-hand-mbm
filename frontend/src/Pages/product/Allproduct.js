import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "react-loader-spinner";
import AdminNav from "../../Components/Nav/AdminNav";
import { getProduct, removeProduct } from "../../Function/Prodt";
import Cards from "../../Components/cards/Cards";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

// import AdminNav from '../../Components/Nav/AdminNav'
// import { getproduct } from '../../Function/Prodt'

function AllProducts() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { user } = useSelector((state) => ({ ...state }));

  const loadProduct = () => {
    setLoading(true);
    getProduct(100)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const handleRemove = (slug) => {
    if (window.confirm("Delete?")) {
      //    console.log(slug);
      removeProduct(slug, user.token)
        .then((res) => {
          console.log(res);
          loadProduct();
          toast.error(`${res.data.title} is deleted`);
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.message);
        });
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div className="col">
          {loading ? (
            <Loader
              type="BallTriangle"
              color="#00BFFF"
              height={80}
              width={80}
            />
          ) : (
            <h4 style={{ fontFamily: "cursive" }}> All products </h4>
          )}
          <div className="row">
            {product.map((p) => (
              <div key={p._id} className="col-md-4 pb-3">
                <Cards slug={p.slug} product={p} handleRemove={handleRemove} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
