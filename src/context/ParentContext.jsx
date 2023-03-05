import FavouriteProvider from './favourite/FavouriteProvider';
import AdminProductsProvider from './admin/products/AdminProductsProvider';
import AdminUsersProvider from './admin/users/AdminUsersProvider';
import CommentProvider from './comment/CommentProvider';
import SaleProvider from './sale/SaleProvider';

const ParentContext = ({ children }) => {
    return (
        <FavouriteProvider>
            <AdminProductsProvider>
                <AdminUsersProvider>
                    <CommentProvider>
                        <SaleProvider>
                            {children}
                        </SaleProvider>
                    </CommentProvider>
                </AdminUsersProvider>
            </AdminProductsProvider>
        </FavouriteProvider>
    );
};

export default ParentContext;