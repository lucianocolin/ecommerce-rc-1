import { useContext } from 'react';
import { Card, ListGroup, Button, Image } from 'react-bootstrap';
import CommentContext from '../../../../context/comment/CommentContext';
import userImgDefault from '../../../../assets/imgs/avatar.png';

const ProductComment = ({ comment, openEditModal, openDeleteModal }) => {

    const { getComment } = useContext(CommentContext);

    return (
        <>
            <ListGroup.Item>
                <Card>
                    <Card.Body>
                        <div className="row">
                            <div className="col-1">
                                <div style={{ height: 'auto', width: 50 }}>
                                    <Image src={
                                        Object.entries(comment.userSend.userProfImg).length !== 0 ?
                                            comment.userSend.userProfImg
                                            :
                                            userImgDefault
                                    } />
                                </div>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <h5>{comment.userSend.name}</h5>
                                </div>
                                <div className="row">
                                    {comment.description}
                                </div>
                            </div>
                        </div>
                        <div className="row">
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
                    </Card.Body>
                </Card>
            </ListGroup.Item>
        </>
    );
};

export default ProductComment;