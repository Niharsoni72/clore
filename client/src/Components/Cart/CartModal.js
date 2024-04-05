import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartModalProduct from './CartModalProduct';

const CartModal = () => {
    return (
        <Fragment>
            <table class="table table-borderless">
                <CartModalProduct/>
            </table>
        </Fragment>
    )
}

export default CartModal