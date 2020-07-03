import React, { Component } from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class AddProduct extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:[],
        }
    }

    componentWillMount(){
        const {id}=this.props.match?this.props.match.params:'';
        const {data}=this.props;
        if(id!==undefined){
            let item =data.find(item => item.id==id);
            this.setState({
                data:[item]
            })
        }

        if(id==undefined){
            this.setState({
                data:data
            })
        }
    }
    
    render() {
        console.log(this.state)
        const {data}=this.state
        return (
            <div className="container mt5">
                <table className="table">
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
                            data && data.map((item,index)=>{
                                return(
                                    <tr key={index}>
                                        <td><Link to={`/product/${item.id}`}><img src={item.img} alt={item.name} width="100" height="100" className="img-fluid" /></Link></td>
                                        <th scope="row"><Link to={`/product/${item.id}`}>{item.id}</Link></th>
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
    }
}

const mapStateToProps=state=>{
    return{
        data:state.data
    }
}

export default connect(mapStateToProps,null)(AddProduct)