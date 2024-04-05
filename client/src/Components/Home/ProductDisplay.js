import React, { Fragment } from 'react';
import Card from '../UI/Card';
// import 'bootstrap/dist/css/bootstrap.min.css'
import classes from '../../CSS/Home/ProductDisplay.module.css';
import Product from './Product';
export const ProductDisplay = () => {
  return (
    <Fragment>
      <Card className={classes.container_main}>
        <h2 className={classes.container_title}>New Arrival's</h2>
        <div className={classes.container_products} >
          <Product imageName='slide-1.jpg' />
          <Product imageName='slide-2.jpg' />
          <Product imageName='slide-3.jpg' />
        </div>
      </Card>
    </Fragment>
  )
}
