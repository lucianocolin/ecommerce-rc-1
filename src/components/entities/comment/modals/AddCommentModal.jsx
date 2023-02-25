import { useState, useContext } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import CommentContext from '../../../../context/comment/CommentContext';

const AddCommentModal = ({ show, onHide }) => {

    const { addComment } = useContext(CommentContext);

    const initialFormValues = {
        description: ''
    };

    const [form, setForm] = useState(initialFormValues);
    const { description } = form;

    const [errorMsg, setErrorMsg] = useState(null);

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
        addComment(form);
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
                        New Comment
                    </Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Description"
                                name="descripcion"
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
                            Send
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

export default AddCommentModal;