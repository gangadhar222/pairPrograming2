import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToOrder, increment, decrement } from "../Redux/action";

export class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            name: '',
            nameaddress: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleIncrement = (id) => {
        const { increment } = this.props
         increment(id)
        this.forceUpdate()
    }

    handleDecrement = (id) => {
        const { decrement } = this.props
         decrement(id)
        this.forceUpdate()
    }

    render() {
        const { data, addToOrder } = this.props
        return (
            <div className="container mt-5">
                <div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Email</label>
                            <input onChange={this.handleChange} name="email" type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">name</label>
                            <input onChange={this.handleChange} name="name" type="text" className="form-control" id="inputPassword4" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input onChange={this.handleChange} name="address" type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <button onClick={() => addToOrder({
                        name: this.state.name,
                        email: this.state.email,
                        address: this.state.address,
                        data: data
                    })} className="btn btn-warning">Place Order</button>
                </div>
                <table className="table mt-4">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Cost</th>
                            <th scope="col">Category</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td><Link to={`/product/${item.id}`}><img src={item.img} alt={item.name} width="100" height="100" className="img-fluid" /></Link></td>
                                        <th scope="row"><Link to={`/product/${item.id}`}>{item.id}</Link></th>
                                        <td>{item.name}</td>
                                        <td>{item.cost}</td>
                                        <td>{item.category}</td>
                                        <td><button className="btn btn-outline btn-warning" onClick={() => this.handleDecrement(item.id)}>-</button>{item.counter}<button class="btn btn-outline btn-success" onClick={() => this.handleIncrement(item.id,1)}>+</button></td>
                                        <td>{`${item.counter * item.cost}`}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.cartArray
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToOrder: (payload) => dispatch(addToOrder(payload)),
        increment: (payload) => dispatch(increment(payload)),
        decrement: (payload) => dispatch(decrement(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
