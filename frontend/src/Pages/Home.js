import React from "react";
import { useState } from "react";
import Footer from "../Components/cards/Footer";
import { useSelector } from "react-redux";
import Jumbotron from "../Components/cards/Jumbotrons";
import Banner from "../Components/cards/Banner";
import NewArrivals from "../Components/Home/NewArrivals";
import MostSold from "../Components/Home/MostSold";
import CategoryList from "../Components/Category/CategoryList";
import SubCategoryList from "../Components/Category/SubCategoryList";
const CONSTANTS = require("../cssVariables").default;

function Home() {
  const [product, setproduct] = useState([]);
  const [loading, setloading] = useState(false);

  const { user } = useSelector((state) => ({ ...state }));
  const style = {
    "background-color": CONSTANTS.shadowText,
    color: CONSTANTS.background,
    "letter-spacing": "4px",
    width: "80vw",
  };
  return (
    <div
      style={{
        display: "grid",
        "place-items": "center",
      }}
    >
      <Banner />
      <br/>

      <div
        className="h1 font-weight-bold text-center"
        style={{
          "background-image":
            "linear-gradient(to top, #9AFEFF 0%, 100%)",
          width: "100%",
      
              }}
      >
        <Jumbotron />
        <br/>
      </div>
      <NewArrivals />
      <br />
      <MostSold />
      <br />
      <h4
        style={style}
        className="text-center p-3 mt-5 mb-5 display-4 jumbotron"
      >
        Categories
      </h4>
      <CategoryList />
      <br />
      <h4
        style={style}
        className="text-center p-3 mt-5 mb-5 display-4 jumbotron"
      >
        Sub-Categories
      </h4>
      <SubCategoryList />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Home;
