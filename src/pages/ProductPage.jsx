import "../css/base-page.css"
import ProdDetailImg from "../components/entities/product/ProdDetailImg";
import ProdDetailInfo from "../components/entities/product/ProdDetailInfo";
import ProdDetailComments from "../components/entities/product/ProdDetailComments";
import { useEffect, useContext } from "react";
import AdminProductsContext from "../context/admin/products/AdminProductsContext";
import AdminUsersContext from '../context/admin/users/AdminUsersContext';

const ProductPage = () => {

    const { getProduct, getProducts, products } = useContext(AdminProductsContext);

    //luego borrar cuando se conecte con product list y sea enviado desde ahi el id
    useEffect(() => {
        getProduct("63fbaefffa4480a5d80c4cc6");
    }, []);

    return (
        <>
            <div className="app">
                <h3>Product Detail</h3>
                <div className="row mb-2">
                    <div className="col-5">
                        <ProdDetailImg />
                    </div>
                    <div className="col-7">
                        <ProdDetailInfo />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ProdDetailComments />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductPage;