import React from 'react'
import { Card, Avatar } from 'antd';
import { EyeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';
function ProductCard({p, loading}) {
    const { Meta } = Card;
    // console.log(p.images[0].url)
    console.log(loading)
    return (
        
      
            <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        className='p-1'
        style={{height:"150px", objectFit:"cover"}}
        src={p.images && p.images.length ? p.images[0].url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKDvbGs5KSuVIll5qLjRALjnTvXletu7aiVQ&usqp=CAU"}
      />
    }
    // to={`/product/product/${slug}`}
    actions={[
      <Link to={`/product/product/${p.slug}`}>
        <EyeOutlined className='fa-lg text-warning' key="eye" />
        <br/>
        View Product
      </Link>
      ,
      
      
    ]}
  >
    <Meta
      // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title={p.title}
      description={p.description.substring(0,30)}
    />
  </Card>
         
                
            
        
    )
}

export default ProductCard
