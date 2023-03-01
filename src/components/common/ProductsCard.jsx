import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
//css
import '../../css/Admin/ProductsCard.css'

const ProductsCard = ({ title, price, offerPrice, isHighligted }) => {
  return (<>
    <Card className='products-card'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title className='products-card-title'>{title}</Card.Title>
        <Card.Text className='products-card-all-prices'>
          {
            offerPrice > 0 ? 
              <div className='products-card-prices-container'>
                <div className='products-card-offerPrice'>{offerPrice}</div> <div className='products-card-price'>{price}</div>
              </div>
               : <div className='products-card-price'>{price}</div>
          }
        </Card.Text>
      </Card.Body>
      <Card.Footer className='products-card-footer'>
        <Button variant="primary">Agregar al carrito</Button>
        {
          isHighligted === true && <FontAwesomeIcon icon={faStar} className='product-card-highlighted-icon'/>
        }
      </Card.Footer>
    </Card>
  </>
  )
}

export default ProductsCard