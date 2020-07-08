import React, { Component } from 'react';
import {connect} from "react-redux";
import Item from "../components/Item";
import {addToCart} from "../Redux/action";
import {Redirect} from "react-router-dom";
import Login from "../components/Login";

export class Home extends Component {

    render() {
        const {data,addToCart,auth}=this.props
      
        return (
            <div className="container mt-5">
                <Item addToCart={addToCart} data={data}  auth={auth}/>
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        data:state.data, 
        auth:state.auth
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        addToCart:(payload)=>dispatch(addToCart(payload))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
