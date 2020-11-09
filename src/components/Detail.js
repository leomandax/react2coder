import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './css/Details.css'
//import addCart from './ItemCount'
import dataJson from '../data.json';


function ItemDetail() {
    const {id} = useParams();
    const product = dataJson.filter(prod => prod._id === id)
    console.log(id);
    console.log(product);

    return (
        <div>
        {
             product.map(item =>(
                <div className="details" key={item._id}>
                    <img src={item.src} alt=""/>
                    <div className="box">
                        <div className="row">
                            <h2>{item.title}</h2>
                            <span>AR${item.price}</span>
                        </div>
                        {/* <Colors colors={item.colors}/> */}
                        <p>{item.description}</p>
                        <p>{item.content}</p>
                        {/* <Link to="/cart" className="cart" onClick={() => addCart(item._id)}>
                            Añadir al carrito
                        </Link> */}
                    </div>
                </div>
            ))
        }
        </div>
)
}

export default ItemDetail
