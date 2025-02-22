import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md sticky-top bg-danger border-bottom ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand fs-1 text-white" to="/">Basato</Link>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo01">
                        <ul className="navbar-nav ">
                            <li className="nav-item ">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            {/* <li className="nav-item ">
                                <Link className="nav-link " aria-current="page" to="/menu">Menu</Link>
                            </li> */}
                            {/* <li className="nav-item ">
                                <Link className="nav-link " aria-current="page" to="/contactus">Contact Us</Link>
                            </li> */}
                            <li className="nav-item ">
                                <Link className="nav-link" to="/login">SignIn</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">SignUp</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
