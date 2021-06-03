import React from "react";
import { Card } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./SingleProduct.css";
import { Carousel } from "react-responsive-carousel";
import ProductListItems from "./ProductListItems";
import { Tabs } from "antd";

function SingleProduct({ product }) {
  const { Meta } = Card;
  const { TabPane } = Tabs;
  const style = {
    "letter-spacing": "2px",
    "text-align": "center",
    "font-family": "'Montserrat', sans-serif",
  };

  function callback(key) {
    console.log(key);
  }

  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;1,400&display=swap"
        rel="stylesheet"
      />
      <div className="col-md-7">
        {product.images && product.images.length ? (
          <Carousel autoPlay infiniteLoop showArrows={true}>
            {product.images &&
              product.images.map((i) => (
                <div>
                  <img src={i.url} key={i.public_id} />
                </div>
              ))}
          </Carousel>
        ) : (
          <Carousel>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJWvTI6vyN5VJYzsVa3FKiiwNLalvwXxQ7Vg&usqp=CAU" />
              <p className="legend">No Images</p>
            </div>
          </Carousel>
        )}
        <Tabs type="card" defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Description" key="1">
            {product.description}
          </TabPane>
          <TabPane tab="More" key="2">
            Call us on Number xxxx-xxxx-xx
          </TabPane>
        </Tabs>
      </div>

      <div className="col-md-5">
        <h1 style={style} className="bg-info p-3">
          <b>{product.title}</b>
        </h1>
        <Card
          actions={[
            <>
              <Link to="/">
                <HeartOutlined className="text-info" />
                <br />
                Add to Wishlist
              </Link>
            </>,
          ]}
        >
          <ProductListItems product={product} />
        </Card>
      </div>
    </>
  );
}

export default SingleProduct;
