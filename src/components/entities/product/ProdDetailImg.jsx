import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import ImageContext from '../../../context/image/ImageContext';

const ProdDetailImg = () => {

    const { currentProductImages } = useContext(ImageContext);

    return (
        <>
            <div style={{ height: 'auto', width: 450 }}>
                <Image src={currentProductImages[0]} />
            </div>
        </>
    );
};

export default ProdDetailImg;