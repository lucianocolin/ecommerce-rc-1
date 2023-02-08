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
      const res = await clientAxios.get('http://localhost:4000/api/v1/product');
      res && setValues({ ...values, products: res.data.products });
    } catch (error) {
      throw error;
    }
  };

  return (
    <AdminProductsContext.Provider value={{
      ...values,
      getProducts
    }}>
      {children}
    </AdminProductsContext.Provider>
  )
}


export default AdminProductsProvider;