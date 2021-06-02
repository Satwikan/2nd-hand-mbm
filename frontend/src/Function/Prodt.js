import axios from 'axios';

export const createProduct = async (category, authtoken) =>
  await axios.post(`http://localhost:8000/api/product`, category, {
    headers: {
      authtoken,
    },
  });

export const Products = async () =>
  await axios.get(`http://localhost:8000/api/products`);



export const getproduct = async (count) =>
  await axios.get(`http://localhost:8000/api//products/:${count}`);


export const removeproduct = async (slug, authtoken) =>
  await axios.delete(`http://localhost:8000/api//product/${slug}` ,{
    headers: {
      authtoken,
    }});



export const getproducts = async (sort,order,page) =>
    await axios.post(`http://localhost:8000/api/products`, {
      sort, order, page
    });



  export const getproductCount = async () =>
    await axios.get(`http://localhost:8000/api/product/total`);
  


  export const getrelated = async (productId) =>
    await axios.get(`http://localhost:8000/api/product/related/${productId}`);
  
  

  export const getProductss = async (slug) =>
    await axios.get(`http://localhost:8000/api/productx/${slug}`);
  
  