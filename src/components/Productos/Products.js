import {Link} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import './css/Products.css'

const getPromise = (data) => {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            return res(data)
        }, 2000)
    }
    
    const Productos = ({dataJson}) => {

        const [sourceData, setSourceData] = useState ([]);

        useEffect(() => {
            getPromise( dataJson ).then(result => setSourceData(result));
        }, [dataJson])

        return (
            <div id="product">
               {
                   products.map(product =>(
                       <div className="card" key={product._id}>
                           <Link to={`/product/${product._id}`}>
                               <img src={product.src} alt=""/>
                           </Link>
                           <div className="content">
                               <h3>
                                   <Link to={`/product/${product._id}`}>{product.title}</Link>
                               </h3>
                               <span>AR${product.price}</span>
                               <p>{product.description}</p>
                               <button>Añadir al carrito</button>
                           </div>
                       </div>
                </div>


export default Productos
