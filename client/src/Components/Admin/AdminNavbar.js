import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const AdminNavbar = () => {
    return (
        <Fragment>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <NavLink className="navbar-brand text-dark mx-2" aria-current="page" to="/">Clore</NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link text-dark mx-2" aria-current="page" href={'/AdminHomePage'}>Dashboard</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark mx-2" href="/ShowOrders">Orders</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark mx-2" href="/ShowProduct">Products</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark mx-2" href="/ShowCategory">Category</a>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link text-dark mx-2" href="/ShowSubCategory">Sub Categories</a> */}
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark mx-2" href="/ShowBrand">Brands</a>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default AdminNavbar