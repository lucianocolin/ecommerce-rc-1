import { useContext } from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import CommentContext from '../../../../context/comment/CommentContext';

const ProductComment = ({ comment, openEditModal, openDeleteModal }) => {

    const { getComment } = useContext(CommentContext);

    return (
        <>
            <ListGroup.Item>
                <Card>
                    <Card.Body>
                        <div className="row">
                            <div className="col">
                                <h5>{comment.userSend.name}</h5>
                            </div>
                            <div className="col d-flex justify-content-end">
                                <Button
                                    variant="warning"
                                    className='me-2'
                                    onClick={() => {
                                        getComment(comment._id);
                                        openEditModal();
                                    }}
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="danger"
                                    onClick={() => {
                                        getComment(comment._id);
                                        openDeleteModal();
                                    }}
                                >
                                    Delete
                                </Button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                {comment.description}
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </ListGroup.Item>
        </>
    );
};

export default ProductComment;