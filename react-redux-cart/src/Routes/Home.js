import React, { Component } from 'react';
import {connect} from "react-redux";
import Item from "../components/Item";
import {addToCart} from "../Redux/action";

export class Home extends Component {
    render() {
        const {data,addToCart}=this.props
        return (
            <div className="container mt-5">
                <Item handleClick={addToCart} data={data} />
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        data:state.data
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        addToCart:(payload)=>dispatch(addToCart(payload))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
