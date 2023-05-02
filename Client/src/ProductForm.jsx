import React from 'react'
import { useCreateProductMutation } from './api/apiSlice'
import "./Form.css"
export const ProductForm = () => {
const [createProduct] = useCreateProductMutation()



const handleSubmit = (e) => {
e.preventDefault()
const name = e.target.elements.name.value.trim()
const description = e.target.elements.description.value.trim()
const img_url = e.target.elements.img_url.value.trim()
const price = e.target.elements.price.value.trim()
createProduct({name,description,img_url,price})
alert("Producto Cargado")
console.log(name,description,img_url,price)
}


 return (
  <form onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre:</label>
      <input type="text"  name='name' />

      <label htmlFor="descripcion">Descripción:</label>
      <textarea name='description' />

      <label htmlFor="urlImagen" name='img_url'>URL de la imagen:</label>
      <input type="text"  name='img_url' />

      <label htmlFor="precio">Precio:</label>
      <input type="number" name='price'/>

      <button type="submit">Cargar Producto</button>
    </form>
  )
}

export default ProductForm