import SaleContext from './SaleContext';
import clientAxios from '../../config/axios';
import { useState, useContext } from 'react';
import ImageContext from '../image/ImageContext';

const SaleProvider = ({ children }) => {

    const { getProductImages, currentProductImages } = useContext(ImageContext);

    const initialState = {
        sales: [],
        currentSale: {},
        saleNew: {},
        saleUnpaid: {}
    }
    const [values, setValues] = useState(initialState);

    const getSale = async saleId => {
        try {
            const res = await clientAxios.get(`/sale/${saleId}`);
            res && setValues({ ...values, currentSale: res.data.sale });
        } catch (error) {
            throw error;
        }
    }

    const createSale = async sale => {
        try {
            const res = await clientAxios.post(`/sale`, sale);
            res && getSaleUnpaidByUserLoggedIn();
        } catch (error) {
            throw error;
        }
    }

    const updateSale = async sale => {
        try {
            const res = await clientAxios.put(`/sale/${sale._id}`, sale);
            res && getSaleUnpaidByUserLoggedIn();
        } catch (error) {
            throw error;
        }
    }

    const updateSaleNew = async salenew => {
        try {
            const res = await clientAxios.put(`/sale/${salenew._id}`, salenew);
            res && getSaleUnpaidByUserLoggedIn();
        } catch (error) {
            throw error;
        }
    }

    const getSaleUnpaidByUserLoggedIn = async () => {
        try {
            const res = await clientAxios.get('/sale');
            if (res.status === 200 && res.data.sale.products && res.data.sale.products.length > 0) {
                // Carga de imagen por cada producto
                res.data.sale.products.map(prod => {
                    getProductImages(prod.productId);
                    prod.photo = currentProductImages[0];
                });
                setValues({ ...values, saleUnpaid: res.data.sale });
            }
        } catch (error) {
            throw error;
        }
    }

    return (
        <SaleContext.Provider value={{
            ...values,
            getSaleUnpaidByUserLoggedIn,
            getSale,
            createSale,
            updateSale,
            updateSaleNew,
        }}>
            {children}
        </SaleContext.Provider>
    );
};

export default SaleProvider;