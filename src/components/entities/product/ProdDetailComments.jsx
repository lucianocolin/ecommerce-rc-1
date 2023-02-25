import { useEffect, useContext, useState } from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import AdminProductsContext from '../../../context/admin/products/AdminProductsContext';
import CommentContext from '../../../context/comment/CommentContext';
import ProductComment from '../comment/card/ProductComment';
import AddCommentModal from '../comment/modals/AddCommentModal';
import EditCommentModal from '../comment/modals/EditCommentModal';
import DeleteCommentModal from '../comment/modals/DeleteCommentModal';

const ProdDetailComments = () => {

    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const openAddModal = () => setShowAddModal(true);
    const openEditModal = () => setShowEditModal(true);
    const openDeleteModal = () => setShowDeleteModal(true);

    const { currentProduct } = useContext(AdminProductsContext);
    const { getCommentsByProdId, comments, getComment } = useContext(CommentContext);

    useEffect(() => {
        //habilitar una vez conecte comentarios con db
        //getCommentsByProdId(currentProduct.id);
    }, [])

    return (
        <>
            <Card className='py-2'>
                <Card.Header>
                    <div className="row">
                        <div className="col">
                            <Card.Title>Comments</Card.Title>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <Button
                                variant="success"
                                onClick={() => openAddModal()}
                            >
                                New
                            </Button>
                        </div>
                    </div>
                </Card.Header>
                <ListGroup variant="flush">
                    {
                        comments ?
                            comments.map((comment, index) => (
                                <ProductComment
                                    comment={comment}
                                    key={index}
                                    openEditModal={openEditModal}
                                    openDeleteModal={openDeleteModal}
                                />
                            ))
                            :
                            <h3>Without comments</h3>
                    }
                </ListGroup>
            </Card>

            <AddCommentModal
                show={showAddModal}
                onHide={() => setShowAddModal(false)}
            />

            <EditCommentModal
                show={showEditModal}
                onHide={() => setShowEditModal(false)}
            />

            <DeleteCommentModal
                show={showDeleteModal}
                onHide={() => setShowDeleteModal(false)}
            />
        </>
    );
};

export default ProdDetailComments;