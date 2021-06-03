import React from "react";
import { useState } from "react";
import AdminNav from "../../../Components/Nav/AdminNav";
import {
  createCategory,
  getCategories,
  removeCategory,
} from "../../../Function/Category";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
function CategoryCreate() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setcategories] = useState([]);
  const [keyword, setKeyword] = useState("");
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadcategories();
  }, []);

  const loadcategories = () =>
    getCategories().then((c) => setcategories(c.data));

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    setLoading(true);
    createCategory({ name }, user.token)
      .then((res) => {
        // console.log(res)
        setLoading(false);
        setName("");
        toast.success(`"${res.data.name}" is created`);
        loadcategories();
      })
      .catch((err) => {
        // console.log(err);
        if (err.response.status === 400) toast.error(err.response.data);
        setLoading(false);
      });
  };

  const hangleRemove = (slug) => {
    console.log(slug);
    if (window.confirm("Delete?")) {
      setLoading(true);
      removeCategory(slug, user.token)
        .then((res) => {
          setLoading(false);
          toast.success(`${res.data.name} deleted`);
          loadcategories();
        })
        .catch((err) => {
          // console.log(err);
          toast.error(err);
          // if(err.response.status === 400)toast.error(err.response.data);
          setLoading(false);
        });
    }
  };

  const categoryForm = () => (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label style={{ fontFamily: "cursive" }}>Name</label>
          <input
            type="text"
            className="form-control"
            autoFocus
            placeholder="Enter Category"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <button className="btn btn-outline-primary">Save</button>
        </div>
      </form>
    </div>
  );

  const handleSearchChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

  const searched = (keyword) => (c) => c.name.toLowerCase().includes(keyword);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col">
          {loading ? (
            <Loader type="Bars" color="#00BFFF" height={80} width={80} />
          ) : (
            <h4>Create Category</h4>
          )}
          {categoryForm()}
          <hr />

          <input
            type="search"
            placeholder="Filter"
            value={keyword}
            className="form-control mb-4 container pt-4"
            onChange={handleSearchChange}
          />

          <hr />
          {categories.filter(searched(keyword)).map((c) => (
            <div className="alert alert-secondary container" key={c._id}>
              {c.name}{" "}
              <span
                className="btn btn-sm float-right"
                onClick={() => hangleRemove(c.slug)}
              >
                <DeleteOutlined className="text-danger" />
              </span>
              <Link to={`/admin/category/${c.slug}`}>
                <span className="btn btn-sm float-right">
                  <EditOutlined className="text-warning" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryCreate;
