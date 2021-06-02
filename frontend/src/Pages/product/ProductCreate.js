import React from 'react'
import { useState } from 'react';
import AdminNav from '../../Components/Nav/AdminNav';
import {createProduct, Products} from '../../Function/Prodt';
import { getCategories, getCategoriesSubs} from '../../Function/Category'
import { Select } from 'antd';

import { useSelector } from "react-redux";
import {toast} from 'react-toastify';
import { useEffect } from 'react';
import Fileupload from '../../Components/Forms/Fileupload';
import Loader from 'react-loader-spinner';
function ProductCreate() {

   const initial = {
    title: '',
    description: '',
    price: '',
    categories: [],
    category: '',
    subs: [],
    shipping: '',
    quantity: '',
    images: [],
    colors: ["Black", "Brown", "White", "Blue"],
    brands: ["Apple", "sumsung", "microsoft", "ASUS"],
    color: '',
    brand:'',
};
    const { user } = useSelector((state) => ({ ...state }));
    const [values, setValues] = useState(initial);
    const [categoriessub, setcategoriessub] = useState([]);
    const[showSub, setshowSub] = useState(false);
    const[loading, setloading] = useState(false);
  
const { Option } = Select;
    const {
        title,
        description,
        price,
        categories,
        category,
        subs,
        shipping,
        quantity,
        images,
        colors,
        brands,
        color,
        brand,
      } = values;
    
      useEffect(() => {
        loadcategories();
    },[])

    const loadcategories = () => getCategories().then(c => setValues({...values, categories: c.data}));

    const handleCategoryChange = (e) => {
      e.preventDefault();
      console.log(e.target.value)
      setValues({...values,  category: e.target.value});
      getCategoriesSubs(e.target.value).then(res => {
        console.log(res.data);
        setcategoriessub(res.data);
      }).catch(err => {
        console.log(err.message)
      })
      setshowSub(true)
    } 


    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(values);
        createProduct(values, user.token)
      .then((res) => {
        console.log(res);
        alert(`${res.data.title} is created`);
        window.location.reload();
      })
      .catch((err) => {
        toast.error(err.response.data.err)
      });
    }

    const handlechange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });

        // console.log(e.target.name , '-----------', e.target.value);
        
    };


    return (
        <div className='container-fluid' >
        <div className='row'>
            <div className='col-md-2'>
                <AdminNav />
            </div>
            <div className="col-md-7  offset-md-1">
            {
                            loading?(
                                <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
                            ): (
                              <h4 style={{fontFamily:"cursive"}}>Product create</h4>
                            )
                        }
                
                <hr />
                





                   <div className='p-3'>
                    <Fileupload values={values} setValues={setValues} setloading={setloading} />
                   </div> 
                <form onSubmit={handlesubmit}>

                   <div className='form-group' style={{fontFamily:"cursive"}}>
                   <label>Title</label>
                    <input type="text" name='title' className="form-control container" value={title}
                    autoFocus
                     onChange={handlechange} />
                   </div> 

                   <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                name="description"
                className="form-control container"
                value={description}
                onChange={handlechange}
              />
            </div> 

                   <div className='form-group'>
                   <label>Price</label>
                    <input type="number" name='price' className="form-control container" value={price} onChange={handlechange} />
                   </div>

                   <div className='form-group'>
                   <label>Shipping</label>
                    <select
                    name='shipping'
                    className='form-control'
                    onChange={handlechange}
                    >
                    <option >Please select</option>
                    <option value="NO">NO</option>
                    <option value="YES">YES</option>
                    </select>
                   </div>  

                   <div className='form-group'>
                   <label>Quantity</label>
                   <input type="number" name='quantity' className="form-control container" value={values.quantity} onChange={handlechange} />
                   </div> 

                   <div className='form-group'>
                   <label>Color</label>
                    <select
                    name='color'
                    className='form-control'
                    onChange={handlechange}
                    >
                    <option >Please select</option>
                    {
                        values.colors.map((c) => <option key={c} value={c}>{c}</option>)
                    }
                    </select>
                   </div>

                   <div className='form-group'>
                   <label>Brand</label>
                    <select
                    name='brand'
                    className='form-control'
                    onChange={handlechange}
                    >
                    <option >Please select</option>
                    {
                        values.brands.map((c) => <option key={c} value={c}>{c}</option>)
                    }
                    </select>
                   </div>

                   <div className="form-group">
                    <label>Category</label>
                    <select 
                    className="form-control container "
                    onChange={handleCategoryChange}
                    name='category'>
                    <option>Please select</option>
                    {categories.length > 0  && categories.map((c) => <option key={c._id} value={c._id} >{c.name}</option>)}
                    </select>
                </div>

                    {
                      showSub ?  (
                        <div className="form-control">
                        <label>Sub Category</label>
                        <Select
                        mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      Value={subs}
      
      onChange={(value) => setValues({...values, subs: value})} 
                        >{categoriessub.length &&
                          categoriessub.map(c => (
                            <option key={c._id} value={c._id}> 
                          {c.name}
                          </option>
                          ))
                        }
                          
                          
                        </Select>
                        </div>
                      ):(
                        <>

                        </>
                      )
                    }
                    <br/>
                   <button className='btn btn-outline-info'>
                        SAVE
                   </button>

                </form>


                
            </div>
        </div>
            
        </div>
    )
}

export default ProductCreate;
