import './Card.css';
import React, { useState,useEffect } from 'react';
import {useGetProductQuery, useDeleteProductMutation} from './api/apiSlice';
import { Modal } from './modal';
import { EditModal } from './ModalEdit';
import {  useNavigate } from 'react-router-dom'
function AdminPanel() {
  const navigate = useNavigate();

  useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem('token')
		if (!loggedUserJSON) {
			navigate("/")
		}
	}, [navigate])


  const handleLogout = e => {
        window.localStorage.removeItem('token')
          window.location.reload();
        navigate("/user/SignIn")
        alert("cerraste sesion")
          
      }





/// Modal Window init
const [show, setShow] = useState(false)
const [showEdit, setShowEdit] = useState(false)
const [modalProps, setModalProps] = useState({
  id:0,
  name:'',
  price:0,
  descirption:'',
  img_url:'',
})
console.log(modalProps)


// Molda window finish ////


 const {data,error, isLoading} = useGetProductQuery();
const [deleteProduct] = useDeleteProductMutation()



 if (isLoading) {
  return <div>Loading...</div>
}

if (error) {
  if ('status' in error) {
    // you can access all properties of `FetchBaseQueryError` here
    const errMsg = 'error' in error ? error.error : JSON.stringify(error.data)

    return (
      <div>
        <div>An error has occurred:</div>
        <div>{errMsg}</div>
      </div>
    )
  } else {
    // you can access all properties of `SerializedError` here
    return <div>{error.message}</div>
  }
}

if (data) { 
  return ( 
    <React.Fragment>
    <nav className='nav'>
      <button onClick={handleLogout}>Cerrar Sesion</button>
      <button onClick={() => setShow(true)}>Cargar producto</button>
      <Modal onClose={() => setShow(false) } show={show}/>
    </nav>
    <div className='Card-conteiner'>
      { data.map(e =>(
        <div key={e.id}>
       <div className="product-card">
       <img src={e.img_url} alt={e.name} />
       <div className="product-info">
         <h2>{e.name}</h2>
         <p>{e.description}</p>
         <p className="price">${e.price}</p>
        <button className="edit-button" onClick={() =>{setShowEdit(true) ;  setModalProps({id:e.id, name:e.name,img_url:e.img_url,description:e.description,price:e.price})}}>Edit</button>
        <EditModal onClose={() => setShowEdit(false) } showEdit={showEdit} 
        propucts={modalProps}
        />
         <button className="delete-button" onClick={ () => {deleteProduct(e.id)}}>Delete</button>
       </div>
     </div>
     </div>
      ))}
       </div>
       </React.Fragment>
       )
}
}

export default AdminPanel;
