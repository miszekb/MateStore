import React from "react";
import './ProductItem.style.scss'; 

class ProductItem extends React.Component {

    render () {
        return(
            <div className="productItem">
                <img className="productItem__image" src={this.props.photo} />
                <h3 className="productItem__title">{this.props.title}</h3>
                <p className="productItem__description">{this.props.price} EUR</p>
                <p className="productItem__description">{this.props.description}</p>
                <button className="productItem__button" onClick={this.props.addToCart}>Add to cart</button>
            </div>
        )
    }
}

export default ProductItem;