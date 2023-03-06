import { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import SaleContext from '../../../../context/sale/SaleContext';

const SaleNewTabPayment = ({ setTabActive }) => {

    const { updateSaleNew } = useContext(SaleContext);

    const initialValue = {
        cardnumber: "",
        cardowner: "",
        expirdate: "",
        segurcode: ""
    }
    const [formTabPayment, setFormTabPayment] = useState(initialValue);
    const { cardnumber, cardowner, expirdate, segurcode } = formTabPayment;

    const [error, setError] = useState([]);

    const handleOnChange = e => {
        setFormTabPayment({
            ...formTabPayment,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = e => {
        e.preventDefault();

        if (cardnumber && cardowner && expirdate && segurcode) {
            updateSaleNew(formTabPayment);
            setTabActive('confirmation');
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Warning',
                text: 'Some field is empty'
            });
        }
    }

    return (
        <>
            <Form className='formCreate'>
                <h2>Datos de Pago</h2>
                <Form.Group className="mb-3 mt-3">
                    <Form.Label>Card number</Form.Label>
                    <Form.Control
                        name="cardnumber"
                        type="text"
                        placeholder="Card number"
                        value={cardnumber}
                        onChange={handleOnChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Card owner</Form.Label>
                    <Form.Control
                        name="cardowner"
                        type="text"
                        placeholder="Card owner"
                        value={cardowner}
                        onChange={handleOnChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Expirdate</Form.Label>
                    <Form.Control
                        name="expirdate"
                        type="text"
                        placeholder="Expirdate"
                        value={expirdate}
                        onChange={handleOnChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Segurity code</Form.Label>
                    <Form.Control
                        name="segurcode"
                        type="text"
                        placeholder="Segurity code"
                        value={segurcode}
                        onChange={handleOnChange}
                    />
                </Form.Group>
                {/* <Form.Group className="mb-3">
                    <Form.Label>asd</Form.Label>
                    <Form.Select
                        name="category"
                        value={category}
                        onChange={handleOnChange}
                    >
                        <option value={'missing'}>Missing</option>
                        <option value={'found'}>Found</option>
                        <option value={'up for adoption'}>Up for adoption</option>
                    </Form.Select>
                </Form.Group> */}
                <div>
                    {
                        error && (<p className='errorMsg'>{error}</p>)
                    }
                </div>

                <div className='d-flex justify-content-end'>
                    <Button
                        variant='success'
                        className='btnSave'
                        onClick={handleOnSubmit}
                    >Next
                    </Button>
                </div>
            </Form>
        </>
    );
};

export default SaleNewTabPayment;