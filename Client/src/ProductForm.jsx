import React from 'react'
import { useCreateProductMutation } from './api/apiSlice'

export const ProductForm = () => {
const [createProduct] = useCreateProductMutation()



const handleSubmit = (e) => {
e.preventDefault()
const name = e.target.elements.name.value.trim()
const description = e.target.elements.description.value.trim()
const img_url = e.target.elements.img_url.value.trim()
const price = e.target.elements.price.value.trim()
createProduct({name,description,img_url,price})

console.log(name,description,img_url,price)
}


 return (
  <form onSubmit={handleSubmit}>
    <input type="text" name='name' />
    <input type="text" name='description' />
    <input type="text" name='img_url' />
    <input type="number" name='price' />
  <button>Cargar Producto</button>
  </form>
  )
}

export default ProductForm