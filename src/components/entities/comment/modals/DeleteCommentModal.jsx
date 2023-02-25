import { useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CommentContext from '../../../../context/comment/CommentContext';

const DeleteCommentModal = ({ show, onHide }) => {
    const { deleteComment , currentComment} = useContext(CommentContext);

    const confirmDelete = () => {
        deleteComment(currentComment);
        onHide();
    }

    return (
        <>
            <Modal
                show={show}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header className='modaltitle'>
                    <Modal.Title>
                        ¿Are you sure to delete this object?
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>This object will be deleted permanently</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" onClick={confirmDelete}>
                        Delete
                    </Button>
                    <Button variant="secondary" onClick={onHide}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default DeleteCommentModal;