import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOutSubmit } from "../Redux/action.js";

function Navbar(props) {
    const { auth, adminAuth, logOutSubmit } = props;
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/product" className="nav-link" >Product</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/addproduct" className="nav-link">Add Product</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/cart" className="nav-link">Cart</Link>
                        </li>
                        <li className="nav-item ">  
                            <Link to="/orders" className="nav-link" >Order</Link>
                        </li>
                        <li className="nav-item ">
                            {auth ? <button onClick={() => logOutSubmit('auth')} className="nav-link btn-warning text-secondary">UserLogout</button> : <Link to="/login" className="nav-link">UserLogIn</Link>}
                        </li>
                        <li className="nav-item ">
                            {adminAuth ? <button onClick={() => logOutSubmit('admin')} className="nav-link btn-warning text-secondary">AdminLogout</button> : <Link to="/login" className="nav-link">AdminLogIn</Link>}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth,
    adminAuth: state.adminAuth
})

const mapDispatchToProps = dispatch => ({
    logOutSubmit: (payload) => dispatch(logOutSubmit(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);