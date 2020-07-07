import React, { Component } from 'react'

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
        const {validateUser} = this.props.location.state
        console.log(validateUser)
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
                <button onClick={() => validateUser({
                    name: this.state.name,
                    category: this.state.password,
                })} className="btn btn-warning">Add Product</button>
            </div>
        )
    }
}

export default Login
