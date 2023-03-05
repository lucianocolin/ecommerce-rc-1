import { Button, Form } from 'react-bootstrap';
import { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import SaleContext from '../../../../context/sale/SaleContext';

const SaleNewTabUbication = ({ setTabActive }) => {

    const { currentSale, updateSaleNew } = useContext(SaleContext);

    const initialValue = {
        country: '',
        city: '',
        postalcode: '',
        street: ''
    }
    const [formTabUbi, setFormTabUbi] = useState(initialValue);
    const { country, city, postalcode, street } = formTabUbi;

    const [error, setError] = useState([]);

    const handleOnChange = e => {
        setFormTabUbi({
            ...formTabUbi,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = e => {
        e.preventDefault();

        if (country && city && postalcode && street) {
            updateSaleNew(formTabUbi);
            setTabActive('payment');
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
                <h3>Location information</h3>
                <Form.Group className="mb-3 mt-3">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        name="country"
                        type="text"
                        placeholder="Your country"
                        value={country}
                        onChange={handleOnChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        name="city"
                        type="text"
                        placeholder="Your city"
                        value={city}
                        onChange={handleOnChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Zip code</Form.Label>
                    <Form.Control
                        name="postalcode"
                        type="text"
                        placeholder="Your zip code"
                        value={postalcode}
                        onChange={handleOnChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        name="street"
                        type="text"
                        placeholder="Your address"
                        value={street}
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

export default SaleNewTabUbication;