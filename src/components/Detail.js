import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import './css/Details.css'
import addCart from './ItemCount'


const getDetail = ({dataJson}) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            return res({product})
        }, 3000)
    });

    function itemDetail() {
        const [product,setProduct] = useState ([]);

            useEffect(() => {
                getDetail( dataJson ).then(result => setProduct(result));
                }, [dataJson])

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
                                <Link to="/cart" className="cart" onClick={() => addCart(item._id)}>
                                    Añadir al carrito
                                </Link>
                            </div>
                        </div>
                    ))
                }
                </div>
        )
    }

export default itemDetail
