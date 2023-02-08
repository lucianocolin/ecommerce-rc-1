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
      console.log('Hola', res.data)
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