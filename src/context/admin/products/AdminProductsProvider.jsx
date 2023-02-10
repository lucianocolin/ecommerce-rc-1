import React from 'react';
//context
import AdminProductsContext from './AdminProductsContext';
//hooks
import { useState } from 'react';
//axios
import clientAxios from '../../../config/axios';

const AdminProductsProvider = ({ children }) => {

  const initialValues = {
    products: [],
    currentProduct: {}
  };

  const [values, setValues] = useState(initialValues);

  const getProducts = async () =>{
    try {
      const res = await clientAxios.get('/product');
      res && setValues({ ...values, products: res.data.products });
    } catch (error) {
      throw error;
    }
  };

  const getProduct = async (productId) =>{
    try {
      const res = await clientAxios.get(`/product/${productId}`);
      res && setValues({ ...values, currentProduct: res.data.product });
    } catch (error) {
      throw error;
    }
  }

  const deleteProduct = async (productId) =>{
    try {
      const res = await clientAxios.delete(`/product/${productId}`);
      res && getProducts();
    } catch (error) {
      throw error;
    }
  }

  return (
    <AdminProductsContext.Provider value={{
      ...values,
      getProducts,
      getProduct,
      deleteProduct
    }}>
      {children}
    </AdminProductsContext.Provider>
  )
}


export default AdminProductsProvider;