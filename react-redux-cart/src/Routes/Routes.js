import React from 'react';
import {Switch,Route} from 'react-router-dom';

export default function Routes() {
    return (
            <Switch>
                <Route exact path="/" render={()=><Home />} />
                <Route path="/product" render={()=><Product />} />
                <Route path="/cart" render={()=><Cart />} />
                <Route path="/orders" render={()=><Orders />} />
            </Switch>
    )
}
