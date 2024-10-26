import React from 'react'
import './ProductsFeatured.css'
import ProductsCard from '../Card-Products/ProductsCard'

function ProductsFeatured() {
  return (
    <section className="featured-products">
      <h2>Produit phare</h2>
      <ProductsCard/>
      
    </section>
  )
}

export default ProductsFeatured