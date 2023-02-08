import React from 'react';
import FavouriteProvider from './favourite/FavouriteProvider';

const ParentContext = ({ children }) => {
    return (
        <FavouriteProvider>
            {children}
        </FavouriteProvider>
    );
};

export default ParentContext;