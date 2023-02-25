import React from 'react';
import FavouriteProvider from './favourite/FavouriteProvider';
import AdminProductsProvider from './admin/products/AdminProductsProvider';
import AdminUsersProvider from './admin/users/AdminUsersProvider';
import CommentProvider from './comment/CommentProvider';

const ParentContext = ({ children }) => {
    return (
        <FavouriteProvider>
            <AdminProductsProvider>
                <AdminUsersProvider>
                    <CommentProvider>
                        {children}
                    </CommentProvider>
                </AdminUsersProvider>
            </AdminProductsProvider>
        </FavouriteProvider>
    );
};

export default ParentContext;