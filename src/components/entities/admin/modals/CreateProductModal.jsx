import React, { useState, useContext } from "react";
import {Modal, Form, Button} from 'react-bootstrap';
import AdminProductsContext from "../../../../context/admin/products/AdminProductsContext";

import '../../../../css/Admin/CreateProductModal.css';

const CreateProductModal = ({ show, onHide }) => {

  const { createProduct } = useContext(AdminProductsContext);

  const initialFormValues = {
    name: '',
    brand: 'Adidas',
    price: '',
    stock: '',
    category: 'Indumentaria',
    isInOffer: false,
    offerPrice: ''
  }

  const [form, setForm] = useState(initialFormValues);

  const { name, brand, price, stock, category, isInOffer, offerPrice } = form;

  const handleChange = e =>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  };

  const handleSubmit = e =>{
    e.preventDefault();
    createProduct(form);
    onHide();
    setForm(initialFormValues);
  }

  /* const [isDisabled, setIsDisabled] = useState(true) */

  return (
    <>
      <Modal show={show} centered className="create-product-modal">
        <Form onSubmit={handleSubmit}>
        <Modal.Header>
          <Modal.Title>Añadir un producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="name"
                name="name"
                placeholder="Indique el nombre del producto"
                autoFocus
                className="create-product-modal-input"
                value={name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Marca</Form.Label>
              <Form.Select
               name='brand'
               className="create-product-modal-input"
               value={brand}
               onChange={handleChange} >
                <option value="Adidas">Adidas</option>
                <option value="Kappa">Kappa</option>
                <option value="Beats">Nike</option>
                <option value="Playstation">Puma</option>
                <option value="Reebok">Reebok</option>
                <option value="Topper">Topper</option>
                <option value="Umbro">Umbro</option>
                <option value="Under Armour">Under Armour</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                name="price"
                placeholder="Indique el precio del producto"
                className="create-product-modal-input"
                value={price}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                name="stock"
                placeholder="Indique cuántas unidades hay en stock"
                className="create-product-modal-input"
                value={stock}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Categoría</Form.Label>
              <Form.Select
                name='category'
                className="create-product-modal-input"
                value={category}
                onChange={handleChange}  >
                  <option value="Indumentaria">Indumentaria</option>
                  <option value="Calzado">Calzado</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>¿Está en oferta?</Form.Label>
              <Form.Select
               className="create-product-modal-input"
               name="isInOffer"
               value={isInOffer}
               onChange={handleChange} >
                <option value={false}>No</option>
                <option value={true}>Si</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Precio de oferta</Form.Label>
              <Form.Control
                type="number"
                name="offerPrice"
                placeholder="Indique el precio de oferta"
                className="create-product-modal-input"
                value={offerPrice}
                onChange={handleChange}
                /* disabled={isDisabled} */ />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={()=> onHide()}>
            Cancelar
          </Button>
          <Button variant="primary" type="submit" >
            Añadir producto
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default CreateProductModal;
