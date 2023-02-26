import { useState, useContext, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import CommentContext from '../../../../context/comment/CommentContext';
import ProductContext from '../../../../context/admin/products/AdminProductsContext';

const EditCommentModal = ({ show, onHide }) => {

    const { updateComment, currentComment } = useContext(CommentContext);
    const { currentProduct } = useContext(ProductContext);

    const initialFormValues = {
        description: ''
    };

    const [form, setForm] = useState(initialFormValues);
    const { description } = form;

    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        currentComment._id && setForm(currentComment);
    }, [currentComment._id]);

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!description) {
            setErrorMsg('All data are require');
            return;
        }
        setErrorMsg(null);
        const comment = {
            description: description,
            isprivate: false,
            productId: currentProduct._id,
            // Pendiente añadir uso de middleware y quitar el userSend de aqui...
            userSend: {
                name: "Pedro",
                userId: '6303d565758b3133c754f2ae'
            },
            _id: currentComment._id
        }
        updateComment(comment);
        onHide();
    };

    return (
        <>
            <Modal
                show={show}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header className='modaltitle'>
                    <Modal.Title>
                        Edit Comment
                    </Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Description"
                                name="description"
                                value={description}
                                onChange={handleChange}
                                onFocus={() => setErrorMsg(null)}
                            />
                        </Form.Group>
                        <div>
                            {errorMsg && (<p className="error-msg">{errorMsg}</p>)}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" type="submit">
                            Save
                        </Button>
                        <Button variant="danger" onClick={onHide}>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
};

export default EditCommentModal;