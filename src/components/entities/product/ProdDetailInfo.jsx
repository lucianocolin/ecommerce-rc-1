import { useContext } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import AdminProductsContext from '../../../context/admin/products/AdminProductsContext';

const ProdDetailInfo = () => {

    const { currentProduct } = useContext(AdminProductsContext);

    return (
        <>
            <Card className='py-2'>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h5>Model</h5>
                        <p>{currentProduct.name}</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h5>Brand</h5>
                        <p>{currentProduct.brand}</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h5>Price</h5>
                        <p>
                            ${currentProduct.offerPrice ?
                                currentProduct.offerPrice : currentProduct.price}
                        </p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h5>Is in Offer</h5>
                        {currentProduct.isInOffer ? 'True' : 'False'}
                    </ListGroup.Item>
                </ListGroup>

                <Card.Body className='d-flex justify-content-end'>
                    <Button
                        variant="warning"
                        // onClick={() => goToPage('/')}
                        className='ms-2'
                    >
                        Add to Cart
                    </Button>
                    <Button
                        variant="success"
                        // onClick={() => goToPage('/')}
                        className='ms-2'
                    >
                        Buy
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default ProdDetailInfo;