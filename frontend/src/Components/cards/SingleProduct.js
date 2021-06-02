import React from 'react'
import {Card} from 'antd';
import {HeartOutlined, ShoppingCartOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import './SingleProduct.css'
import { Carousel } from 'react-responsive-carousel';
import ProductListItems from './ProductListItems';
import { Tabs } from 'antd';
function SingleProduct({product}) {
    const {Meta} = Card;
    const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
      }




    return (
        <>
        
        <div className="col-md-7">
        
        {
            product.images && product.images.length ? (
                <Carousel autoPlay infiniteLoop showArrows={true}>
       {product.images && product.images.map((i) => (
                <div >
                    <img src={i.url} key={i.public_id} />
                    <p className="legend">Legend 1</p>
                </div>
       
       ))}
                
            </Carousel>
            ): (
                <Carousel>
                <div>
                    <img src="data:image/jpeg;base64,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" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJWvTI6vyN5VJYzsVa3FKiiwNLalvwXxQ7Vg&usqp=CAU" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJnb43MuKReMIG9fvcHJrOAupaJjzKCcEdyw&usqp=CAU" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            )
        }
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
        <h1 style={{fontFamily:"cursive"}} className="bg-info p-3">{product.title}</h1>
            <Card 
            actions={[
     <>
     <ShoppingCartOutlined className="text-success" key="setting" />
     <br/>
     Add to Cart
     </>
     ,
     <>
     <Link to="/" >
     <HeartOutlined className="text-info"/>
     <br/>
         Add to Wishlist
     </Link>,
      
     </>
    ]}
            >
            
                <ProductListItems product={product}/>
            </Card>
        </div>
        </>
    )
}

export default SingleProduct
