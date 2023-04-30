import './Card.css';
import React from 'react';
import {useGetProductQuery} from './api/apiSlice';

function App() {

  const {data,error, isLoading} = useGetProductQuery();
  console.log(data)
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
      <button>Cerrar Sesion</button>
      <button>Cargar producto</button>
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
         <button className="edit-button">Edit</button>
         <button className="delete-button">Delete</button>
       </div>
     </div>
     </div>
      ))}
       </div>
       </React.Fragment>
       )
}
}

export default App
