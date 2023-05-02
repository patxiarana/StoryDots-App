import  React  from 'react';
import "./Paginated.css"



export default function Paginated (props) {
const NumOfpag = [];
//console.log(props)
const AllProducts = props.Allproducts 
const ProductForPage = props.ProductForPage
const pagination = props.pagination

for(let i = 0 ; i<= Math.ceil(AllProducts/ProductForPage) - 1; i++){
    NumOfpag.push(i+1)

}
console.log(AllProducts,ProductForPage,pagination)
console.log(NumOfpag)
return (
    <>
     <ul className='paginated'>
         {NumOfpag.map( Number => (
             <li className='number'>
           <a onClick={() => pagination(Number)} className='numero1'>{Number}</a>
           </li> 
         ))}
     </ul>
     <button className='button-nav'>Entrar Como Administrador</button>
     </>
     )

}