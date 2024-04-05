import React, { Fragment } from 'react';
import {HiOutlineShoppingCart} from 'react-icons/hi';

import { BsHandbag, BsEye } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = (props) => {

    return (
        <Fragment>
            <div className="card m-4" style={{ width: '18rem' }}>
                <img src={process.env.PUBLIC_URL + "images/" + props.imageName} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.productName}</h5>
                    {/* <h6>{props.imageName}</h6> */}
                    <p className="card-text">{props.shortDesc}</p>
                    <div className="w-75 mx-auto">
                        <a href="#" className="btn btn-outline-warning mx-2"><HiOutlineShoppingCart /></a>
                        <a href="#" className="btn btn-outline-success mx-2"><BsEye /></a>
                        <a href="#" className="btn btn-outline-primary mx-2"><BsHandbag /></a>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Product