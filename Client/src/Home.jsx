import './Card.css';
import {useGetProductQuery} from './api/apiSlice';
import React, {useState, useEffect}from 'react';
import Paginated from './paginated';
export const Home = () => {
  const {data,isLoading,error} = useGetProductQuery();
  const [ActualPage, setActualPage] = useState(1)
  const [ProductForPage, setProdcutForPage] = useState(3)
  
  
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
      
      if(data) { 
    const AllProducts = data;

    const IndexLastProduct = ActualPage * ProductForPage ;
    const IndexFirtsProduct = IndexLastProduct -ProductForPage;
    const CurrentProduct =  AllProducts.slice(IndexFirtsProduct,IndexLastProduct)
     
    const pagination = (NumberPage)=>{
            setActualPage(NumberPage)
        }

       return ( 
          <React.Fragment>
               <nav className='nav'>
               <Paginated
                ProductForPage={ProductForPage}
                Allproducts ={AllProducts.length}
                pagination={pagination}  />          
              </nav>
          <div className='Card-conteiner'>
            { CurrentProduct.map(e =>(
              <div key={e.id}>
             <div className="product-card">
             <img src={e.img_url} alt={e.name} />
             <div className="product-info">
               <h2>{e.name}</h2>
               <p>{e.description}</p>
               <p className="price">${e.price}</p>
             </div>
           </div>
           </div>
            ))}
             </div>
             </React.Fragment>
             )
      }

}