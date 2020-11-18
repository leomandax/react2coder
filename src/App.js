//es-lint disable-next-line
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
//import Contador from './components/ItemCount'
import ItemList from './components/Productos/ItemList';
import Detail from './components/Detail';
import { DataProvider } from './components/Context';
import Cart from './components/Cart'

export default function App() {
    return(
      <DataProvider>
        <div className="app">
          <Router>
          <Navbar />
            <Switch >
              <Route exact path='/'>
              <ItemList />
              </Route> 
              <Route exact path='/product/:id'>
              <Detail />
              </Route>
              <Route>
                <Cart />
              </Route>
            </Switch>
          </Router>
        </div>
        </DataProvider>
    );
  }