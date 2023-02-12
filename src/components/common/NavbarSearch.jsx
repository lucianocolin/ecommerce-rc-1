import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavbarSearch = () => {

    const initialFormValues = {
        textSearched: ''
    };

    const [form, setForm] = useState(initialFormValues);
    //const { monto, porcPago, fecha } = form;
    const { textSearched } = form;

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const executeSearch = () => {
        if (!textSearched) return;
        // redireccionar a pagina de resultados de busqueda
    };

    return (
        <>
            <Form.Control
                type="text"
                placeholder="Type here"
                name="textSearched"
                value={textSearched}
                onChange={handleChange}
            />
            <Button
                variant="success"
                onClick={() => executeSearch()}
                className='ms-1'
            >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
        </>
    );
};

export default NavbarSearch;