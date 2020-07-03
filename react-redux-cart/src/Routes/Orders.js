import React, { Component } from 'react';
import {connect} from "react-redux";

export class Orders extends Component {
    render() {
        const {data}=this.props
        console.log(data)
        return (
            <div className="container mt-5">
                {
                    data && data.map((item,index)=>{
                        return(
                            <div key={index}>
                                <div>
                                    <label>{item.name}</label>
                                    <label>{item.email}</label>
                                    <label>{item.address}</label>
                                </div>
                                <table className="table mt-4">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Image</th>
                                            <th scope="col">ID</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Cost</th>
                                            <th scope="col">Category</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            item.data && item.data.map((item,index)=>{
                                                return(
                                                    <tr key={item.id}>
                                                        <td><img src={item.img} alt={item.name} width="100" height="100" className="img-fluid" /></td>
                                                        <th scope="row">{+index+ +1 }</th>
                                                        <td>{item.name}</td>
                                                        <td>{item.cost}</td>
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
}

const mapStateToProps=state=>{
    return{
        data:state.orderArray
    }
}

export default connect(mapStateToProps,null)(Orders)
