import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';


import {useSelector} from 'react-redux';
import Banner from '../Components/cards/Banner';
import Footer from '../Components/cards/Footer';
import Jumbotrons from '../Components/cards/Jumbotrons';
// import {useDispatch} from 'react-redux';
// import { toast } from 'react-toastify'

import ProductCard from '../Components/cards/ProductCard';
import { getproduct } from '../Function/Prodt';
function Home() {

    
    const [product, setproduct] = useState([])
    const [loading, setloading] = useState(false)
    
    
    
    const {user} = useSelector((state) => ({...state }));

    const loadProduct = () => {
        setloading(true)
        getproduct(10).then(res => {
            setproduct(res.data);
            setloading(false)
            // console.log(res.data)
        }).catch(err => {
            console.log(err)
            setloading(false)
        })
    }
    console.log(product)
    useEffect(() => {
        loadProduct();
    },[])




    return (
        <>
            <Banner />
            <div className='jumbotron text-danger h1 font-weight-bold text-center'>
                <Jumbotrons  />
             </div>
        <div className="container">
            <div className='row'>
              {
                  product.map((p) => (
                     <div key={p._id} className="col-md-4">
                     <ProductCard p = {p} loading={loading} /> 
                     </div>
                  ))
              }
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <Footer />
        </>
    )
}

export default Home
