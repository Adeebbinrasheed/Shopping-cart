import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductHd from '../Components/ProductHd'
import ProductDisplay from '../Components/ProductDisplay'
import ProductDescription from '../Components/ProductDescription'
import RelatedProducts from '../Components/RelatedProducts'

const Product = () => {
  const {all_products}=useContext(ShopContext)
  const {productId}=useParams()
  const product=all_products.find((item)=>item.id===Number(productId))
  if(!product){
    return <div>Product not found</div>
  }
  return (
    <section className='p-8 py-28'>
      <div>
        <ProductHd product={product}/>
        <ProductDisplay product={product}/>
        <ProductDescription />
        <RelatedProducts/>
      </div>
    </section>
  )
}

export default Product