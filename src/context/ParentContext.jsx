import FavouriteProvider from './favourite/FavouriteProvider';
import AdminProductsProvider from './admin/products/AdminProductsProvider';
import AdminUsersProvider from './admin/users/AdminUsersProvider';
import CommentProvider from './comment/CommentProvider';
import SaleProvider from './sale/SaleProvider';
import ImageProvider from './image/ImageProvider';

const ParentContext = ({ children }) => {
    return (
        <ImageProvider>
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
        </ImageProvider>
    );
};

export default ParentContext;