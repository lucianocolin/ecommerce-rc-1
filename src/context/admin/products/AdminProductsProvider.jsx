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

  const getProducts = async () => {
    try {
      const res = await clientAxios.get('/product');
      console.log('Hola', res.data)
      res && setValues({ ...values, products: res.data.products });
    } catch (error) {
      throw error;
    }
  };

  const getProductsByProdSearched = async prodSearched => {
    try {
      const res = await clientAxios.get('/product');
      if (res.status === 201) {
        setValues({
          ...values,
          products: res.data.products.filter(p => p.name.toLowerCase().includes(prodSearched.toLowerCase()))
        });
      }
    } catch (error) {
      throw error;
    }
  }

  return (
    <AdminProductsContext.Provider value={{
      ...values,
      getProducts,
      getProductsByProdSearched
    }}>
      {children}
    </AdminProductsContext.Provider>
  )
}


export default AdminProductsProvider;