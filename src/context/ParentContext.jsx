import React from 'react';
import FavouriteProvider from './favourite/FavouriteProvider';
import AdminProductsProvider from './admin/products/AdminProductsProvider';

const ParentContext = ({ children }) => {
    return (
        <FavouriteProvider>
        <AdminProductsProvider>
            {children}
        </AdminProductsProvider>
        </FavouriteProvider>
    );
};

export default ParentContext;