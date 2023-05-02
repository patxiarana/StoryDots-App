import React, {useState} from 'react'
import { useUpdateProductMutation } from './api/apiSlice'
import "./Form.css"
export const EditProduct = (props) => {
const [editProduct] =  useUpdateProductMutation()
const id = props.id

const handleSubmit = (e) => {
e.preventDefault()
const name = e.target.elements.name.value.trim()
const description = e.target.elements.description.value.trim()
const img_url = e.target.elements.img_url.value.trim()
const price = e.target.elements.price.value.trim()
editProduct({name,description,img_url,price,id})
//console.log({name,description,img_url,price})
alert("Pructo Editado")
}

 return (
  <form onSubmit={handleSubmit}>
  <label htmlFor="nombre">Nombre:</label>
  <input type="text"  name='name' defaultValue={props.name} />

  <label htmlFor="descripcion">Descripción:</label>
  <textarea  name='description' defaultValue={props.description}/>

  <label htmlFor="urlImagen">URL de la imagen:</label>
  <input type="text" name='img_url' defaultValue={props.img_url} />

  <label htmlFor="precio">Precio:</label>
  <input type="number"   name='price' defaultValue={props.price}/>

  <button type="submit">Cargar Producto</button>
</form>
)
}

export default EditProduct ;