//es-lint disable-next-line
import React, {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar'
import Contador from './components/ItemCount'
import ItemList from './components/Productos/ItemList';

export default function App() {
  const [count, setCount] = useState(1);

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
    return(
        <div className="app">
          <Router>
            <Navbar />
            <ItemList />
            <Contador
              count={count}
              addCart={addCart}
              lessCart={lessCart}
            />
          </Router>
        </div>
    );
  }