import React from 'react';
//import "./button.css";

const Contador = ({ count, addCart, lessCart }) => {
    return(
   /* const [count, setCount] = useState(1);

    const addCart = () => {
        if(count===10){
            alert('No más de 10')
            return;
        }
        setCount(count + 1)
    }

    const lessCart = () => {
        if(count===1){
            alert('No menos de 1')
            return;
        }
        setCount(count - 1)
    }
   return(*/
        <div>
            <button onClick={addCart}>+</button>
            <p> {count} </p>
            <button onClick={lessCart}>-</button>
        </div>
    );
}

export default Contador;