import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../Redux/action';
import { Redirect } from "react-router-dom";

export class AddProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            cost: '',
            category: '',
            img: '',
            render: false,
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (obj) => {
        const { addProduct, adminAuth } = this.props
        if (adminAuth) {
            this.setState({
                render: false
            })
            addProduct(obj)
        }
        else{
            console.log('hi',adminAuth)
            this.setState({
                render: true
            })
        }
    }

    render() {
        if (this.state.render) {
            return <Redirect to='/login' />
        }
        return (
            <div className="container mt-5">
                <h3 className="text-center">Add Product</h3>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Name</label>
                        <input onChange={this.handleChange} name="name" type="text" className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Cost</label>
                        <input onChange={this.handleChange} name="cost" type="text" className="form-control" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputAddress">Category</label>
                        <input onChange={this.handleChange} name="category" type="text" className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputAddress">Image</label>
                        <input onChange={this.handleChange} name="img" type="text" className="form-control" />
                    </div>
                </div>
                <button onClick={() => this.handleClick({
                    name: this.state.name,
                    category: this.state.category,
                    cost: this.state.cost,
                    img: this.state.img
                })} className="btn btn-warning">Add Product</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    adminAuth: state.adminAuth
})

const mapDispatchToProps = dispatch => {
    return {
        addProduct: (payload) => dispatch(addProduct(payload))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
