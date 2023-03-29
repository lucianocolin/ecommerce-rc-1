import { useState, useContext, useEffect } from 'react';
import { Card, Tab, Tabs, Button } from 'react-bootstrap';
import SaleNewTabUbication from '../components/entities/sale/new/SaleNewTabUbication.jsx';
import SaleNewTabPayment from '../components/entities/sale/new/SaleNewTabPayment';
import '../css/sale/sale.css';
import SaleNewTabConfirm from '../components/entities/sale/new/SaleNewTabConfirm';
import SaleCard from '../components/entities/sale/card/SaleCard';
import SaleContext from '../context/sale/SaleContext';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const SaleNewPage = () => {

    const navigate = useNavigate();

    const { getSaleUnpaidByUserLoggedIn, saleUnpaid, deleteProductsOfSaleUnpaid } = useContext(SaleContext);

    const [tabActive, setTabActive] = useState('ubication');

    useEffect(() => {
        getSaleUnpaidByUserLoggedIn();
    }, []);

    const handleCancel = e => {
        e.preventDefault();

        Swal.fire({
            icon: 'question',
            title: 'Are you sure to cancel this purchase?',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProductsOfSaleUnpaid(saleUnpaid);
                Swal.fire('Purchase canceled', 'success');
                navigate("/home");
            } 
        })
    }

    return (
        <>
            <div className='app'>

                <div className="row">
                    <div className="col">
                        <h3>My Cart</h3>
                    </div>
                    <div className="col d-flex justify-content-end">
                        <Button
                            variant='danger'
                            className='btnCancel'
                            onClick={handleCancel}
                        >Cancel
                        </Button>
                    </div>
                </div>



                <SaleCard sale={saleUnpaid} />

                <Card>
                    <Card.Body className=''>
                        <Tabs
                            id="new-sale-tabs"
                            activeKey={tabActive}
                            // onSelect={(tab) => setTabActive(tab)}
                            className="mb-3"
                        >
                            <Tab eventKey="ubication" title="Ubication">
                                <SaleNewTabUbication setTabActive={setTabActive} />
                            </Tab>
                            <Tab eventKey="payment" title="Payment data">
                                <SaleNewTabPayment setTabActive={setTabActive} />
                            </Tab>
                            <Tab eventKey="confirmation" title="Confimation">
                                <SaleNewTabConfirm />
                            </Tab>
                        </Tabs>
                    </Card.Body>
                </Card>
            </div>


        </>
    );
};

export default SaleNewPage;