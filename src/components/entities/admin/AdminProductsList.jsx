import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import AdminProductsContext from "../../../context/admin/products/AdminProductsContext";
//css
import "../../../css/Admin/AdminProductsList.css";

const AdminProductsList = ({ data, openDeleteModal }) => {
  const isInOffer = (value) => {
    if (value === true) {
      return "Sí";
    } else {
      return "No";
    }
  };

  const { getProduct } = useContext(AdminProductsContext);

  return (
    <>
      <tr>
        <td>{data.name}</td>
        <td>{data.brand}</td>
        <td>{data.price}</td>
        <td>{data.stock}</td>
        <td>{data.category}</td>
        <td>{isInOffer(data.isInOffer)}</td>
        <td className="admin-products-list-btn-section">
          <Button onClick={() => getProduct(data._id)}>Editar</Button>
          <Button 
            variant="danger" 
            onClick={() => {
              getProduct(data._id) 
              openDeleteModal(); }} >
            Eliminar
          </Button>
        </td>
      </tr>
    </>
  );
};

export default AdminProductsList;
