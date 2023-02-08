import React, { useContext, useEffect } from "react";
import { Table } from "react-bootstrap";
//css
import '../css/Admin/AdminProducts.css';
import AdminProductsContext from '../context/admin/products/AdminProductsContext';
import AdminProductsList from "../components/entities/admin/AdminProductsList";

const AdminProducts = () => {

  const { products, getProducts } = useContext(AdminProductsContext);

  useEffect(()=>{
    getProducts();
  }, []);

  useEffect(()=>{
    console.log('productos=>', products)
  }, [products])

  return (
    <>
      <h1>Productos - ADMIN</h1>
      <div className="admin-products-table-container">
        <Table striped bordered hover variant="dark"
          className="admin-products-table" >
          <thead className="admin-products-table-head">
            <tr>
              <th>Nombre</th>
              <th>Marca</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Categoría</th>
              <th>¿Está en oferta?</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
              {
                products.map((product, index)=>(
                  <AdminProductsList 
                  data={product}
                  key={index} />
                ))
              }
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default AdminProducts;
