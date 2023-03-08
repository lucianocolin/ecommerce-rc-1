import React, { useContext, useEffect, useState } from 'react';
import ProductsCard from '../components/common/ProductsCard';
import AdminProductsContext from '../context/admin/products/AdminProductsContext';
import '../css/CategoryPage.css';

const CategoryPage = () => {

  const { products, getProducts, categoryFiltered } = useContext(AdminProductsContext)

  const allProducts = products.map((product, index)=>(
    <ProductsCard 
      title={product.name}
      price={product.price}
      offerPrice={product.offerPrice}
      key={index} />
  ))

  const [listProducts, setListProducts] = useState([...allProducts])

  const categoryFilter = (category) =>{
    setListProducts(
      products.filter(product => product.category === category)
        .map((product, index)=>(
          <ProductsCard 
          title={product.name}
          price={product.price}
          offerPrice={product.offerPrice}
          key={index} />
        ))
    )
  }

  useEffect(()=>{
    setListProducts(allProducts)
  }, [getProducts])

  useEffect(()=>{
    getProducts()
  }, [])

  useEffect(()=>{
    console.log(categoryFiltered)
  }, [categoryFiltered])

  return (
    <>
      <h1 className='category-page-title'>CATEGORÍAS</h1>
      <div className='category-page-links-container'>
        <h3 className='category-page-link' onClick={()=> setListProducts(allProducts)}>TODAS</h3>
        <h3 className='category-page-link' onClick={()=> categoryFilter('Zapatillas')}>Zapatillas</h3>
        <h3 className='category-page-link' onClick={()=> categoryFilter('Ojotas')}>Ojotas</h3>
        <h3 className='category-page-link' onClick={()=> categoryFilter('Botines')}>Botines</h3>
        <h3 className='category-page-link' onClick={()=> categoryFilter('Remeras')}>Remeras</h3>
        <h3 className='category-page-link' onClick={()=> categoryFilter('Camisetas')}>Camisetas</h3>
        <h3 className='category-page-link' onClick={()=> categoryFilter('Shorts')}>Shorts</h3>
        <h3 className='category-page-link' onClick={()=> categoryFilter('Pantalones')}>Pantalones</h3>
        <h3 className='category-page-link' onClick={()=> categoryFilter('Buzos y Camperas')}>Buzos y Camperas</h3>
      </div>
      <div className='category-page-categories-container'>
        {
          listProducts
        }
      </div>
    </>
  )
}

export default CategoryPage