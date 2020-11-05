import React from 'react';
import Products from './Products';
import {Route} from "react-router-dom";
import dataJson from '../../data.json';
import Details from '../Detail';

function ItemList () {

    return(
        <section>
                <Products dataJson = {dataJson} />
                <Route path="/" component={Products} exact />
                <Route path="/product" component={Products} exact  />
                <Route path="/product/:id" component={Details} exact />
        </section>
    )
}

export default ItemList