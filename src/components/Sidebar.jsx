import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div>
            <div className="bg-danger fs-3 col-2 flex-coloumn " style={{"height":"100vh","position":"fixed","border-right":"1px solid white"}}>
                <nav className="navbar ">
                    <div className="" id="nav">
                        <center>
                        <ul className="navbar-nav sidebar">
                            <li className="nav-item ">
                                <Link className="nav-link " aria-current="page" to="/menu">Firm Details</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link " aria-current="page" to="/contactus">Add Item</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/login">Add Category</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">All Items</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/register">User Details</Link>
                            </li>
                        </ul>
                        </center>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar 
