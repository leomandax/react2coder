import React from 'react';
import Products from './Products';
import dataJson from '../../data.json';

function ItemList () {

    return(
        <section>
                <Products dataJson = {dataJson} />
        </section>
    )
}

export default ItemList