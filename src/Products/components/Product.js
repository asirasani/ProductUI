import React from 'react';
import '../styles/product.css';

export default ({ id, image, name, price, onClick }) => {

    return <div className="col-lg-4 col-md-6 col-12">
        <div data-testid="product" className="product-container" onClick={onClick}>
        <h6 className="product-name">{name}</h6>
        <img data-testid="productImage" src={image} alt={name} width="100%" />
        <span className="price">
            {
            isNaN(price) ?
                `From $ ${price.low}`
                :
                `$ ${price}`
            }
        </span>
        </div>
    </div>
}