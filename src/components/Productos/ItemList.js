import React from 'react';
import Products from './Products';
import {Route} from "react-router-dom";
import dataJson from '../../data.json';
import Details from '../Detail';

function ItemList () {

    return(
        <section>
                <Products dataJson = {dataJson} />
        </section>
    )
}

export default ItemList