import { useState } from 'react';
import FavouriteContext from './FavouriteContext';

const FavouriteProvider = ({ children }) => {

    const initialValues = {
        currentFavourite: {},
        favourites: []
    }

    const [values, setValues] = useState(initialValues);

    return (
        <FavouriteContext.Provider value={{
            ...values,

        }}>
            {children}
        </FavouriteContext.Provider> 
    );
};

export default FavouriteProvider;