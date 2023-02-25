import { useEffect, useContext } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import AdminProductsContext from '../../../context/admin/products/AdminProductsContext';
import CommentContext from '../../../context/comment/CommentContext';
import ProductComment from '../comment/ProductComment';

const ProdDetailComments = () => {

    const { currentProduct } = useContext(AdminProductsContext);
    const { getCommentsByProdId, comments } = useContext(CommentContext);

    useEffect(() => {
        //habilitar una vez conecte comentarios con db
        //getCommentsByProdId(currentProduct.id);
    }, [])

    return (
        <>
            <Card className='pb-2'>
                <Card.Header>
                    <Card.Title>Comments</Card.Title>
                </Card.Header>
                <ListGroup variant="flush">
                    {
                        comments.length > 0 ?
                            comments.map((comment, index) => (
                                <ProductComment comment={comment} key={index} />
                            ))
                            :
                            <h3>Without comments</h3>
                    }
                </ListGroup>
            </Card>
        </>
    );
};

export default ProdDetailComments;