import React, { useContext, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
//css
import "../css/Admin/AdminProducts.css";
import AdminProductsContext from "../context/admin/products/AdminProductsContext";
import AdminProductsList from "../components/entities/admin/AdminProductsList";
//modals
import DeleteProductsModal from "../components/entities/admin/modals/DeleteProductsModal";
import CreateProductModal from "../components/entities/admin/modals/CreateProductModal";
import EditProductModal from "../components/entities/admin/modals/EditProductModal";

const AdminProducts = () => {
  const { products, getProducts } = useContext(AdminProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  const [showDeleteProductModal, setShowDeleteProductModal] = useState(false);
  const [showCreateProductModal, setShowCreateProductModal] = useState(false);
  const [showEditProductModal, setShowEditProductModal] = useState(false);

  const openDeleteProductModal = () => {
    setShowDeleteProductModal(true);
  };

  const openEditProductModal = () =>{
    setShowEditProductModal(true);
  };

  return (
    <>
      <div className="admin-products-title-container">
        <h1>Productos - ADMIN</h1>
        <Button size="md" className="add-product-btn" onClick={()=> setShowCreateProductModal(true) }>
          Añadir Producto
        </Button>
      </div>
      <div className="admin-products-table-container">
        <Table
          striped
          bordered
          hover
          variant="dark"
          className="admin-products-table"
        >
          <thead className="admin-products-table-head">
            <tr>
              <th>Nombre</th>
              <th>Marca</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Categoría</th>
              <th>¿Está en oferta?</th>
              <th>Precio de oferta</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <AdminProductsList
                data={product}
                key={index}
                openDeleteModal={openDeleteProductModal}
                openEditProductModal={openEditProductModal}
              />
            ))}
          </tbody>
        </Table>
      </div>

      <DeleteProductsModal
        show={showDeleteProductModal}
        onHide={() => setShowDeleteProductModal(false)}
      />

      <CreateProductModal
        show={showCreateProductModal}
        onHide={() => setShowCreateProductModal(false)}
      />

      <EditProductModal 
        show={showEditProductModal}
        onHide={()=> setShowEditProductModal(false)} />
    </>
  );
};

export default AdminProducts;
