import React from "react"
import './Modal.css'
import ProductForm from "./ProductForm"

export const Modal = props => {
   if(!props.show) {
    return null 
   } 
 return(
        <div className="modal">
            <div className="modal-content">
        <div className="modal-header">
           <h4 className="modal-title">Cargar Producto</h4>
           </div>
           <div className="modal-body">
            <ProductForm/>
           </div>
           <div className="modal-footer">
            <button  onClick={props.onClose}  className="button">Close</button>
           </div>
        </div>
        </div>
    )
}

