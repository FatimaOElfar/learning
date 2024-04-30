import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../home/navbar';
import Product from './product';

export default function ProductDetails() {
    const APIurl="https://fakestoreapi.com/products"
    const param =useParams();
    const[product ,setProduct]=useState({});
    console.log(param);
    useEffect(()=>{
        fetch(`${APIurl}/${param.productId}`)
        .then((res)=>res.json())
        .then((product)=>setProduct(product));
    },[])
  return (
    <div>
        <Navbar/>
      {/* <h1>Product Details- {product.title}{param.productId}</h1> */}
      <Product product={product} ShowButton={false}/>
    </div>
  )
}
