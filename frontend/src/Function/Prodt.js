import axios from "axios";

export const createProduct = async (category, authtoken) =>
  await axios.post(`https://mbm-backends.herokuapp.com/api/product`, category, {
    headers: {
      authtoken,
    },
  });

export const Products = async () =>
  await axios.get(`https://mbm-backends.herokuapp.com/api/products`);

export const getProduct = async (count) =>
  await axios.get(`https://mbm-backends.herokuapp.com/api//products/:${count}`);

  export const getAds = async (count) =>
  await axios.get(`https://mbm-backends.herokuapp.com/api/ads/${count}`);

export const removeProduct = async (slug, authtoken) =>
  await axios.delete(`https://mbm-backends.herokuapp.com/api//product/${slug}`, {
    headers: {
      authtoken,
    },
  });

export const getProducts = async (sort, order, page) =>
  await axios.post(`https://mbm-backends.herokuapp.com/api/products`, {
    sort,
    order,
    page,
  });

export const getProductCount = async () =>
  await axios.get(`https://mbm-backends.herokuapp.com/api/product/total`);

export const getRelated = async (productId) =>
  await axios.get(`https://mbm-backends.herokuapp.com/api/product/related/${productId}`);

export const getProductss = async (slug) =>
  await axios.get(`https://mbm-backends.herokuapp.com/api/productx/${slug}`);
