import React from "react";
import { useState, useEffect } from "react";
import AdminNav from "../../Components/Nav/AdminNav";
import { createProduct, Products } from "../../Function/Prodt";
import { getCategories, getCategoriesSubs } from "../../Function/Category";
import { Select } from "antd";

import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import FileUpload from "../../Components/Forms/Fileupload";
import Loader from "react-loader-spinner";
function ProductCreate() {
  const initial = {
    title: "",
    description: "",
    price: "",
    categories: [],
    category: "",
    subs: [],
    images: [],
    phone: "",
  };
  const { user } = useSelector((state) => ({ ...state }));
  const [values, setValues] = useState(initial);
  const [categoriesSub, setCategoriesSub] = useState([]);
  const [showSub, setShowSub] = useState(false);
  const [loading, setLoading] = useState(false);

  const { Option } = Select;
  const { title, description, price, categories, subs, phone } = values;

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = () =>
    getCategories().then((c) => setValues({ ...values, categories: c.data }));

  const handleCategoryChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setValues({ ...values, category: e.target.value });
    getCategoriesSubs(e.target.value)
      .then((res) => {
        console.log(res.data);
        setCategoriesSub(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    setShowSub(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    createProduct(values, user.token)
      .then((res) => {
        console.log(res);
        alert(`${res.data.title} is created`);
        window.location.reload();
      })
      .catch((err) => {
        toast.error(err.response.data.err);
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col-md-7  offset-md-1">
          {loading ? (
            <Loader
              type="BallTriangle"
              color="#00BFFF"
              height={80}
              width={80}
            />
          ) : (
            <h4 style={{ fontFamily: "cursive" }}>Product create</h4>
          )}
          <div className="p-3">
            <FileUpload
              values={values}
              setValues={setValues}
              setloading={setLoading}
            />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group" style={{ fontFamily: "cursive" }}>
              <label>Title</label>
              <input
                type="text"
                name="title"
                className="form-control container"
                value={title}
                autoFocus
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                name="description"
                className="form-control container"
                value={description}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Price</label>
              <input
                type="number"
                name="price"
                className="form-control container"
                value={price}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Seller's Phone number</label>
              <input
                type="number"
                name="phone"
                className="form-control container"
                value={phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Category</label>
              <select
                className="form-control container "
                onChange={handleCategoryChange}
                name="category"
              >
                <option>Please select</option>
                {categories.length > 0 &&
                  categories.map((c) => (
                    <option key={c._id} value={c._id}>
                      {c.name}
                    </option>
                  ))}
              </select>
            </div>

            {showSub ? (
              <div className="form-control">
                <label>Sub Category</label>
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: "100%" }}
                  placeholder="Please select"
                  Value={subs}
                  onChange={(value) => setValues({ ...values, subs: value })}
                >
                  {categoriesSub.length &&
                    categoriesSub.map((c) => (
                      <option key={c._id} value={c._id}>
                        {c.name}
                      </option>
                    ))}
                </Select>
              </div>
            ) : (
              <></>
            )}
            <button>SAVE</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductCreate;
