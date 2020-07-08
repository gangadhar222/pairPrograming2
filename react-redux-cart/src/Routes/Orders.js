import React, { Component } from 'react';
import { connect } from "react-redux";

export class Orders extends Component {
    render() {
        const { data } = this.props
        let total = 0
        if (data.length > 0) {
            for (let i = 0; i < data[0].data.length; i++) {
                total += data[0].data[i].counter * data[0].data[i].cost
            }
            return (
                <div className="container mt-5">
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div>
                                        <h3>Order Details</h3>
                                        <label>Name: {item.name}</label><br />
                                        <label>Email: {item.email}</label><br />
                                        <label>Address: {item.address}</label>
                                        <h4>Total Amount: {total}</h4>
                                    </div>
                                    <table className="table mt-4">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th scope="col">Image</th>
                                                <th scope="col">ID</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Cost</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Category</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                item.data && item.data.map((item, index) => {
                                                    return (
                                                        <tr key={item.id}>
                                                            <td><img src={item.img} alt={item.name} width="100" height="100" className="img-fluid" /></td>
                                                            <th scope="row">{+index + +1}</th>
                                                            <td>{item.name}</td>
                                                            <td>{item.cost}</td>
                                                            <td>{item.counter}</td>
                                                            <td>{item.category}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
        else {
            return <h3 className="text-center mt-5">No Orders</h3>
        }
    }
}

const mapStateToProps = state => {
    return {
        data: state.orderArray
    }
}

export default connect(mapStateToProps, null)(Orders)