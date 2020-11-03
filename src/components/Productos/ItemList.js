import React from 'react';
import Products from './Products';
import dataJson from '../../data.json'

function ItemList () {

    return(
        <section>
            <Products dataJson = {dataJson}  

            />
                {/* <Route path="/" component={Products} exact />
                <Route path="/product" component={Products} exact  /> */}
        </section>
    )
}

export default ItemList