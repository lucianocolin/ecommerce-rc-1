import React from "react";
import { Table } from "react-bootstrap";
//css
import '../css/Admin/AdminProducts.css';

const AdminProducts = () => {
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
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default AdminProducts;
