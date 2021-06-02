import React from 'react'
import { Link } from 'react-router-dom'

function ProductListItems({product}) {
    const {price, category, subs, shipping, color, brand, quantity, sold} = product;
    console.log( category, subs) 
    return (
        
        <ul className="list-group">
        <li className="list-group-item">
         Price <span className="label label-default label-pill pull-xs-right">{price} Rs</span>   
        </li>

        { category  &&
            (
                <li className="list-group-item">
         Category{" "} <span  className="label label-default label-pill pull-xs-right">{category.name} </span>   
                </li>
            )
        }

        

        {
            subs && (
                <li className="list-group-item">
         Sub Categories 
         {
             subs.map((p) => {
                <Link 
                key={p._id}
                className="label label-default label-pill pull-xs-right">{p.name} 
                </Link>
             })
         }   
        </li>
            )
        }

        <li className="list-group-item">
         Shipping <span className="label label-default label-pill pull-xs-right">{shipping} </span>   
        </li>

        <li className="list-group-item">
         Color <span className="label label-default label-pill pull-xs-right">{color} </span>   
        </li>

        <li className="list-group-item">
         Brand <span className="label label-default label-pill pull-xs-right">{brand} </span>   
        </li>

        <li className="list-group-item">
         Available{" "} <span className="label label-default label-pill pull-xs-right">{quantity} </span>   
        </li>

        <li className="list-group-item">
         Sold{" "} <span className="label label-default label-pill pull-xs-right">{sold} </span>   
        </li>
        </ul>
    )
}

export default ProductListItems
