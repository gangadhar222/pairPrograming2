import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { editProduct } from "../Redux/action"

class AddProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            edit: false,
            name: '',
            price: '',
            category: '',
            id: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (id) => {
        this.setState({ edit: !this.state.edit, id: id })
    }
    componentWillMount() {
        const { id } = this.props.match ? this.props.match.params : '';
        const { data } = this.props;
        if (id !== undefined) {
            let item = data.find(item => item.id == id);
            this.setState({
                data: [item]
            })
        }

        if (id == undefined) {
            this.setState({
                data: data
            })
        }
    }

    render() {
        const { data, edit } = this.state
        const { editProduct } = this.props
        if (!edit) {
            return (
                <div className="container mt-5">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Cost</th>
                                <th scope="col">Category</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data && data.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td><Link to={`/product/${item.id}`}><img src={item.img} alt={item.name} width="100" height="100" className="img-fluid" /></Link></td>
                                            <th scope="row"><Link to={`/product/${item.id}`}>{item.id}</Link></th>
                                            <td>{item.name}</td>
                                            <td>{item.cost}</td>
                                            <td>{item.category}</td>
                                            <td><button onClick={() => this.handleClick(item.id)} className="btn btn-info">Edit Product</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Name</label>
                            <input onChange={this.handleChange} name="name" type="text" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Price</label>
                            <input onChange={this.handleChange} name="price" type="text" className="form-control" id="inputPassword4" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Category</label>
                        <input onChange={this.handleChange} name="category" type="text" className="form-control" />
                    </div>
                    <button onClick={() => editProduct(
                        {
                            name: this.state.name,
                            price: this.state.price,
                            category: this.state.category,
                            id: this.state.id
                        }
                    )} className="btn btn-info">Submit</button>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        data: state.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editProduct: props => dispatch(editProduct(props))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)