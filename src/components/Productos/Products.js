import {Link} from 'react-router-dom'
import React, {useState, useEffect, useContext} from 'react'
import '../css/Products.css'
// import Contador from '../ItemCount'
import {DataContext} from '../Context'
import { getFirestore } from '../../firebase/indexfb'


const getPromise = (data) => {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            return res(data)
        }, 2000)
    })}
    
    const Products = ({dataJson}) => {

        const Context = useContext(DataContext);
        const{addCart}=Context;

        const [sourceData, setSourceData] = useState ([]);

        useEffect(() => {
                const db=getFirestore();
                const itemCollection = db.collection("items");
                itemCollection.get().then((querySnapshot) => {
                    if(querySnapshot.size === 0) {
                        console.log('No hay items');
                    }
                const items = (querySnapshot.docs.map(doc =>({...doc.data(), id:doc._id})))
                setSourceData(items);
                })
        },[]);

        return (
            <div id="product">
               {
                   sourceData.map(product =>(
                       <div className="card" key={product._id}>
                           <Link to={`/product/${product._id}`}>
                               <img src={product.src} alt=""/>
                           </Link>
                           <div className="content">
                               <h3>
                                   {product.title}
                               </h3>
                               <span>AR${product.price}</span>
                               <p>{product.description}</p>
                               <button onClick={ ()=>addCart(product._id)} >Añadir al carrito</button>
                               {/* <button onClick={()=> addCart(product._id)}>Añadir al carrito</button> */}
                               {/* <Contador 
                               count={count}
                               addCart={addCart}
                               lessCart={lessCart}
                               /> */}
                           </div>
                       </div>
                 ))}
                </div>
        )}
        


export default Products;
