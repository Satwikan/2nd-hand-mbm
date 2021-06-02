import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Loader from 'react-loader-spinner'
import AdminNav from '../../Components/Nav/AdminNav'
import { getproduct, removeproduct } from '../../Function/Prodt'
import Cards from '../../Components/cards/Cards';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { toast } from 'react-toastify'


// import AdminNav from '../../Components/Nav/AdminNav'
// import { getproduct } from '../../Function/Prodt'

function Allproduct() {

    const [product, setproduct] = useState([])
    const [loading, setloading] = useState(false)
    const dispatch = useDispatch();
    
    
    const {user} = useSelector((state) => ({...state }));

    const loadProduct = () => {
        setloading(true)
        getproduct(100).then(res => {
            setproduct(res.data);
            setloading(false)
        }).catch(err => {
            console.log(err)
            setloading(false)
        })
    }

    useEffect(() => {
        loadProduct();
    },[])

    const handleRemove = (slug) => {
         if(window.confirm("Delete?")){
        //    console.log(slug);
        removeproduct(slug, user.token).then(res => {
            console.log(res)
            loadProduct();
            toast.error(`${res.data.title} is deleted`)
        }).catch((err) => {
            console.log(err)
            toast.error(err.message)
        })
         }
    }  




    
    return (
        <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-2'>
                <AdminNav />
            </div>
            
            <div className="col">
            {
                loading?(
                    <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
                ):(
                    <h4 style={{fontFamily:"cursive"}}> All products </h4>
                )
            }
               <div className='row'>
               {product.map((p) => (
                   <div key={p._id} className="col-md-4 pb-3">
                   <Cards slug={p.slug} product={p} handleRemove={handleRemove} />
                   </div>
                ))}
               </div>
            </div>
        </div>
            
        </div>
    )
}

export default Allproduct
