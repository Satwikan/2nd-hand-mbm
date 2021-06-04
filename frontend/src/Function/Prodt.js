import axios from "axios";

export const createProduct = async (category, authtoken) =>
  await axios.post(`http://localhost:8000/api/product`, category, {
    headers: {
      authtoken,
    },
  });

export const Products = async () =>
  await axios.get(`http://localhost:8000/api/products`);

export const getProduct = async (count) =>
  await axios.get(`http://localhost:8000/api//products/:${count}`);

  export const getAds = async (count) =>
  await axios.get(`http://localhost:8000/api/ads/${count}`);

export const removeProduct = async (slug, authtoken) =>
  await axios.delete(`http://localhost:8000/api//product/${slug}`, {
    headers: {
      authtoken,
    },
  });

export const getProducts = async (sort, order, page) =>
  await axios.post(`http://localhost:8000/api/products`, {
    sort,
    order,
    page,
  });

export const getProductCount = async () =>
  await axios.get(`http://localhost:8000/api/product/total`);

export const getRelated = async (productId) =>
  await axios.get(`http://localhost:8000/api/product/related/${productId}`);

export const getProductss = async (slug) =>
  await axios.get(`http://localhost:8000/api/productx/${slug}`);
