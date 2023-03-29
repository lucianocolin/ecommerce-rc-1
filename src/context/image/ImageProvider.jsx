import React, { useState } from 'react';
import ImageContext from './ImageContext';
import { storage } from "../../firebase/FireBaseConfig";
import { getDownloadURL, ref, listAll } from '@firebase/storage'; //puede generar problema el @

const ImageProvider = ({ children }) => {

    // Firebase: https://console.firebase.google.com/u/0/project/ecommerce-rc/overview?hl=es-419

    const initialValues = {
        currentProductImages: [],
        userProfImg: {}
    }
    const [values, setValues] = useState(initialValues);

    const getProductImages = async productId => {
        try {
            const imagesRef = ref(storage, `products/${productId}`);
            const response = await listAll(imagesRef);
            const resImages = [];
            for (let item of response.items) {
                const url = await getDownloadURL(item);
                resImages.push(url);
            }
            setValues({ ...values, currentProductImages: resImages });
        } catch (error) {
            throw error;
        }
    }

    const getUserProfileImage = async userId => {
        try {
            const imagesRef = ref(storage, `users/${userId}`);
            const response = await listAll(imagesRef);
            const resImages = [];
            for (let item of response.items) {
                const url = await getDownloadURL(item);
                resImages.push(url);
            }
            setValues({ ...values, userProfImg: resImages[0] });
        } catch (error) {
            throw error;
        }
    }

    return (
        <ImageContext.Provider value={{
            ...values,
            getProductImages,
            getUserProfileImage
        }}>
            {children}
        </ImageContext.Provider >
    );
};

export default ImageProvider;