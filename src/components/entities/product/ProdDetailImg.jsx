import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import ImageContext from '../../../context/image/ImageContext';

const ProdDetailImg = () => {

    const { prodDetailImages } = useContext(ImageContext);

    return (
        <>
            <div style={{ height: 'auto', width: 450 }}>
                <Image src={prodDetailImages[0]} />
            </div>
        </>
    );
};

export default ProdDetailImg;