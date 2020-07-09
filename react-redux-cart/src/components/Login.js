import React, { Component } from 'react'
import {loginSubmit} from '../Redux/action.js';
import { connect } from 'react-redux';
import {Redirect} from "react-router-dom";

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             password:''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render() {
        const {loginSubmit,auth,adminAuth} = this.props;
        console.log('auth',auth)
        console.log('adminauth',adminAuth)
        if(auth){
            return <Redirect to='/' />
        }
        if(adminAuth){
            return <Redirect to='/addproduct' />
        }
        return (
            <div className="container mt-5">
                <h3 className="text-center">Login</h3>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Name</label>
                        <input onChange={this.handleChange} name="name" type="text" className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input onChange={this.handleChange} name="password" type="password" className="form-control" />
                    </div>
                </div>
                <button onClick={() => loginSubmit({
                    name: this.state.name,
                    password: this.state.password,
                })} className="btn btn-warning">Submit</button>
            </div>
        )
    }
}

const mapStateToProps = state=>({
    auth: state.auth,
    adminAuth: state.adminAuth
})

const mapDispatchToProps = dispatch => ({
    loginSubmit:(payload)=>dispatch(loginSubmit(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)