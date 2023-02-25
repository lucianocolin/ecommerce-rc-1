import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const ProductComment = ({ comment }) => {
    return (
        <>
            <ListGroup.Item>
                <Card>
                    <Card.Body>
                        <h5>{comment.userSend.name}</h5>
                        {comment.description}
                    </Card.Body>
                </Card>
            </ListGroup.Item>
        </>
    );
};

export default ProductComment;