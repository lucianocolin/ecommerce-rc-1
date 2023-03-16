import React, { useState } from 'react';
import ImageContext from './ImageContext';
import { storage } from "../../firebase/FireBaseConfig";
import { getDownloadURL, ref, listAll } from '@firebase/storage'; //puede generar problema el @

const ImageProvider = ({ children }) => {

    // Firebase: https://console.firebase.google.com/u/0/project/ecommerce-rc/overview?hl=es-419

    const initialValues = {
        prodDetailImages: []
    }
    const [values, setValues] = useState(initialValues);

    const getProdDetailImages = async productId => {
        try {
            const imagesRef = ref(storage, `products/${productId}`);
            const response = await listAll(imagesRef);
            const resImages = [];
            for (let item of response.items) {
                const url = await getDownloadURL(item);
                resImages.push(url);
            }
            setValues({ ...values, prodDetailImages: resImages });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ImageContext.Provider value={{
            ...values,
            getProdDetailImages

        }}>
            {children}
        </ImageContext.Provider >
    );
};

export default ImageProvider;