import React from 'react';
import {Link} from "react-router-dom";

export default function Item(props) {
    const {data,handleClick}=props
    return (
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Category</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((item,index)=>{
                            return(
                                <tr key={item.id}>
                                    <td><Link to={`/product/${item.id}`}><img src={item.img} alt={item.name} width="100" height="100" className="img-fluid" /></Link></td>
                                    <th scope="row"><Link to={`/product/${item.id}`}>{item.id }</Link></th>
                                    <td>{item.name}</td>
                                    <td>{item.cost}</td>
                                    <td>{item.category}</td>
                                    <td><button onClick={()=>handleClick(item.id)} className="btn btn-outline-secondary">Add To Cart</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
