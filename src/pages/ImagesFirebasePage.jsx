import { useState, useEffect } from 'react';
import { storage } from "../firebase/FireBaseConfig";
import { getDownloadURL, ref, listAll } from '@firebase/storage';

const ImagesFirebasePage = () => {

    // Seguir subiendo archivos...
    // https://console.firebase.google.com/u/0/project/ecommerce-rc/storage/ecommerce-rc.appspot.com/files?hl=es-419

    const [images3, setImages3] = useState([])

    let photos = [{ url: "", position: 0 }]

    useEffect(() => {
        getImages('62c5e6abb4ef5f01a437d2b0');
    }, []);

    const getImages = async (id) => {
        try {
            //const imagesRef = ref(storage, `publications/${id}`);
            const imagesRef = ref(storage, `products`);
            const response = await listAll(imagesRef)
            const res = []
            for (let item of response.items) {
                const url = await getDownloadURL(item);
                res.push(url)
            }
            setImages3(res)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div>
            <div className="thumb d-flex justify-content-center">
                {images3.map((item, index) => (
                    <img
                        src={item}
                        alt=""
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImagesFirebasePage;