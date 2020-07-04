import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../Redux/action'

export class AddProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            cost: '',
            category: '',
            img: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { addProduct } = this.props;
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
                <button onClick={() => addProduct({
                    name: this.state.name,
                    category: this.state.category,
                    cost: this.state.cost,
                    img: this.state.img
                })} className="btn btn-warning">Add Product</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addProduct: (payload) => dispatch(addProduct(payload))
    }
}
export default connect(null, mapDispatchToProps)(AddProduct);
