import { useContext } from 'react';
import ImageContext from '../../../context/image/ImageContext';

const ProdDetailImg = () => {

    const { prodDetailImages } = useContext(ImageContext);

    return (
        <>
            <img src={prodDetailImages[0]} className='img-thumbnail' alt='' />
        </>
    );
};

export default ProdDetailImg;