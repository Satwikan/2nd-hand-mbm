import React from "react";
import { Link } from "react-router-dom";

function AdminNav() {
  return (
    <nav>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link text-danger" to="/admin/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-danger" to="/admin/product">
            Product
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-danger" to="/admin/products">
            All Products
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-danger" to="/admin/category">
            Category
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-danger" to="/admin/subcategory">
            Sub Category
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-danger" to="/user/password">
            Password
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default AdminNav;
