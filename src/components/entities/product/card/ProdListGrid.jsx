import { Table, Image } from 'react-bootstrap';
import imgDoesntExist from '../../../../assets/imgs/imgDoesntExist.png';

const ProdListGrid = ({ products }) => {

    return (
        <>
            <Table bordered hover className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Photo</th>
                        <th>Description</th>
                        <th>Brand</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products ?
                            products.map((product, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div style={{ height: 'auto', width: 75 }} >
                                            <Image src={
                                                product.photo && Object.entries(product.photo).length !== 0 ?
                                                    product.photo
                                                    :
                                                    imgDoesntExist
                                            } />
                                        </div>
                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.brand}</td>
                                    <td>${product.price}</td>
                                </tr>
                            ))
                            :
                            <tr>
                                <td>Without selected products</td>
                            </tr>
                    }
                </tbody>
            </Table>
        </>
    );
};

export default ProdListGrid;