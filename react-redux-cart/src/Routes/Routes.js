import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from "./Home";
import Product from "./Product";
import Cart from "./Cart";
import Orders from "./Orders";
import AddProduct from "./AddProduct";

export default function Routes() {
    return (
            <Switch>
                <Route exact path="/" render={()=><Home />} />
                <Route exact path="/product" render={()=><Product />} />
                <Route exact path="/product/:id" render={(props)=><Product {...props}/>} />
                <Route exact path="/addproduct" render={()=><AddProduct />} />
                <Route exact path="/cart" render={()=><Cart />} />
                <Route exact path="/orders" render={()=><Orders />} />
            </Switch>
    )
}
