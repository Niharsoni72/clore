import React, { Fragment, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBoots from '../Navabar/NavbarBoots';

const Favourite = () => {
    const [favouriteProducts, setFavouriteProducts] = useState([]);

    useEffect(() => {
        const fetchFavouriteProducts = async () => {
            try {
                const response = await fetch("http://localhost:1337/api/getfavouriteproducts");
                const data = await response.json();
                setFavouriteProducts(data);
            } catch (error) {
                console.error("Error fetching favourite products:", error);
            }
        };

        fetchFavouriteProducts();
    }, []);

    return (
        <Fragment>
            <NavbarBoots />
            <div className="container mt-4">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {favouriteProducts.map(product => (
                        <div className="col" key={product._id}>
                            <div className="card h-100">
                                <img src={`http://localhost:1337/productImages/${product.image1}`} className="card-img-top" alt={product.product_name} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.product_name}</h5>
                                    <p className="card-text">Price: ${product.price}</p>
                                    <p className="card-text">{product.small_desc}</p>
                                    <p className="card-text">Color: {product.color}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
}

export default Favourite;
