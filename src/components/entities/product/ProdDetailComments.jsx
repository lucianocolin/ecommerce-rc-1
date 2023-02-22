import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const ProdDetailComments = () => {
    return (
        <>
            <Card>
                <Card.Header>
                    <Card.Title>Comments</Card.Title>
                </Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Card>
        </>
    );
};

export default ProdDetailComments;