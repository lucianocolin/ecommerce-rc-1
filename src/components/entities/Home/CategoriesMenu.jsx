import { faShirt, faShoePrints } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../../../css/Home/CategoriesMenu.css';
import { GiArmoredPants, GiConverseShoe, GiFlipFlops, GiHoodie, GiUnderwearShorts } from 'react-icons/gi'
import { TbShoe, TbShirtSport } from 'react-icons/tb'

const CategoriesMenu = () => {
  return (
    <>
      <div className='categories-menu-container'>
        <h2>CATEGORÍAS</h2>
        <div className='categories-menu-categories-container'>
          <div className='categories-menu-category-container'>
            <GiConverseShoe className='categories-menu-icon' />
            <p>Zapatillas</p>
          </div>

          <div className='categories-menu-category-container'>
            <GiFlipFlops className='categories-menu-icon' />
            <p>Ojotas</p>
          </div>

          <div className='categories-menu-category-container'>
            <TbShoe className='categories-menu-icon' />
            <p>Botines</p>
          </div>

          <div className='categories-menu-category-container'>
            <FontAwesomeIcon icon={faShirt} className='categories-menu-icon' />
            <p>Remeras</p>
          </div>

          <div className='categories-menu-category-container'>
            <TbShirtSport className='categories-menu-icon' />
            <p>Camisetas</p>
          </div>

          <div className='categories-menu-category-container'>
            <GiUnderwearShorts className='categories-menu-icon' />
            <p>Shorts</p>
          </div>

          <div className='categories-menu-category-container'>
            <GiArmoredPants className='categories-menu-icon' />
            <p>Pantalones</p>
          </div>

          <div className='categories-menu-category-container'>
            <GiHoodie className='categories-menu-icon' />
            <p>Buzos y Camperas</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoriesMenu