import React, { useContext } from "react";
//react-bootstrap
import { Button, Modal } from "react-bootstrap";
import AdminProductsContext from "../../../../context/admin/products/AdminProductsContext";

const DeleteProductsModal = ({ show, onHide }) => {
  const { deleteProduct, currentProduct } = useContext(AdminProductsContext);

  return (
    <>
      <Modal show={show} centered>
        <Modal.Header>
          <Modal.Title>
            Estás segur@ que deseas eliminar este producto?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>No podrán recuperarse los cambios</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => onHide()}>
            Cancelar
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              deleteProduct(currentProduct._id);
              onHide();
            }}
          >
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteProductsModal;
