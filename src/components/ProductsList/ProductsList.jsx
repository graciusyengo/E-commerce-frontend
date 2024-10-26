import React from 'react'
import './ProductsList.css'
import ProductsFeatured from '../Featured-Products/ProductsFeatured'
import ProductsNewArrivals from '../NewArrival-Products/ProductsNewArrivals'

function ProductsList() {
  return (
    <>
    <ProductsFeatured/>
    <ProductsNewArrivals/>
    </>

  )
}

export default ProductsList