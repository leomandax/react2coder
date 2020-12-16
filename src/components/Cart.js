import React, { Component } from 'react'
import {DataContext} from './Context';
import {Link} from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/firestore';
import './css/Details.css'
import './css/Cart.css'
import { getFirestore } from '../firebase/indexfb';

export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }
    
    async function createOrder() {
        const db = getFirestore();
        const orders = db.collection("orders");
        const newOrder = {
            buyer: userInfo,
            items: cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: price(),
        };

        try {
            const doc = await orders.add(newOrder);
            console.log('Orden creada con id: ' , doc._id);
        }  catch(err) {
            console.log('Error creando la orden');
        }
    }


    render() {
        const {cart,increase,reduction,removeProduct,total} = this.context;
        if(cart.length === 0){
            return <h2 style={{textAlign:"center"}}>No hay ningún producto aun :( </h2>
        }else{
            return (
                <>
                    {
                        cart.map(item =>(
                            <div className="details cart" key={item._id}>
                                <img src={item.src} alt=""/>
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                        <span>AR${item.price * item.count}</span>
                                    </div>
                                    <p>{item.description}</p>
                                    <p>{item.content}</p>
                                    <div className="amount">
                                        <button className="count" onClick={() => reduction(item._id)}> - </button>
                                        <span>{item.count}</span>
                                        <button className="count" onClick={() => increase(item._id)}> + </button>
                                    </div>
                                </div>
                                <div className="delete" onClick={() => removeProduct(item._id)}>X</div>
                            </div>
                        ))
                    }
                    <div className="total">
                        <Link to="/payment">Pagar</Link>
                        <h3>Total: AR${total}</h3>
                    </div>
                </>
                )
            }
        }
}

export default Cart
