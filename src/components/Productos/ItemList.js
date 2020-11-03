import React from 'react';
import Products from './Products';

function Products () {

    return(
        <section>
                <Route path="/" component={Products} exact />
                <Route path="/product" component={Products} exact  />
        </section>
    )
}

export default Products