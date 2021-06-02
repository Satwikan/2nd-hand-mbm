import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

import {useSelector} from 'react-redux';
import Jumbotrons from '../Components/cards/Jumbotrons';

import Banner from '../Components/cards/Banner';
import Footer from '../Components/cards/Footer';

import NewArrivals from '../Components/Home/NewArrivals';
import MostSold from '../Components/Home/MostSold';
import CategoryList from '../Components/Category/CategoryList';
import SubCategoryList from '../Components/Category/SubCategoryList';

function Home() {

    
    const [product, setproduct] = useState([])
    const [loading, setloading] = useState(false)
    
   
    const {user} = useSelector((state) => ({...state }));

    



    return (
        <>
         <Banner />
            <div className='jumbotron text-danger h1 font-weight-bold text-center'>
                <Jumbotrons  />
             </div>


             {/* // New Arrivals */}

            <NewArrivals />
             <br />
             <MostSold />
            <br />
            <h4 style={{fontFamily:"cursive",fontWeight:"bold"}} className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
                Categories
            </h4>
            <CategoryList />
            <br />
            <h4 style={{fontFamily:"cursive",fontWeight:"bold"}} className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
                Sub-Categories
            </h4>
            <SubCategoryList />
            <br />
            <br />
        <Footer />
        </>
    )
}

export default Home
