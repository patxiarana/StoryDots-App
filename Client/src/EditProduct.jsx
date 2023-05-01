import React, {useState} from 'react'
import { useUpdateProductMutation } from './api/apiSlice'

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
}

 return (
  <form onSubmit={handleSubmit}>
    <input type="text" name='name' defaultValue={props.name} />
    <input type="text" name='description' defaultValue={props.description} />
    <input type="text" name='img_url'  defaultValue={props.img_url}/>
    <input type="number" name='price' defaultValue={props.price} />
  <button>Editar Producto</button>
  </form>
  )
}

export default EditProduct ;