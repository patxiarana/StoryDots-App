import React from "react"
import './Modal.css'
import { EditProduct } from "./EditProduct"

export const EditModal = props => {
   if(!props.showEdit) {
    return null 
   } 
   console.log(props)

 return(
        <div className="modal">
            <div className="modal-content">
        <div className="modal-header">
           <h4 className="modal-title">Editar Producto</h4>
           </div>
           <div className="modal-body">
            <EditProduct 
            id = {props.propucts.id}
            name={props.propucts.name}
            description={props.propucts.description}
            img_url={props.propucts.img_url}
            price={props.propucts.price}/>
           </div>
           <div className="modal-footer">
            <button  onClick={props.onClose}  className="button">Close</button>
           </div>
        </div>
        </div>
    )
}

