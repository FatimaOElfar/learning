import React from 'react'
import Navbar from '../component/home/navbar'
import ProductList from '../component/products/prodectlist'
import SlikSlider from '../component/about/slikSlider'

export default function Home() {
  return (
    <div>
      <Navbar/>
      {/* <SlikSlider/> */}
      <ProductList/>
     
    </div>
  )
}
