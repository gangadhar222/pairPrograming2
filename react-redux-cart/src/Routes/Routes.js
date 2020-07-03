import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from "./Home";
import AddProduct from "./AddProduct";
import Cart from "./Cart";
import Orders from "./Orders";

export default function Routes() {
    return (
            <Switch>
                <Route exact path="/" render={()=><Home />} />
                <Route exact path="/product" render={()=><AddProduct />} />
                <Route exact path="/product/:id" render={(props)=><AddProduct {...props}/>} />
                <Route exact path="/cart" render={()=><Cart />} />
                <Route exact path="/orders" render={()=><Orders />} />
            </Switch>
    )
}
