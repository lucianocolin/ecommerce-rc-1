import React from 'react';
import FavouriteProvider from './favourite/FavouriteProvider';
import AdminProductsProvider from './admin/products/AdminProductsProvider';
import AdminUsersProvider from './admin/users/AdminUsersProvider';

const ParentContext = ({ children }) => {
    return (
        <FavouriteProvider>
        <AdminProductsProvider>
        <AdminUsersProvider>
            {children}
        </AdminUsersProvider>
        </AdminProductsProvider>
        </FavouriteProvider>
    );
};

export default ParentContext;