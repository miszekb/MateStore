import React from "react";
import './Store.style.scss'; 
import UpperBar from "../../components/UpperBar/UpperBar";
import ProductItem from "../../components/ProductItem/ProductItem";
import SearchOptions from "../../components/SearchOptions/SearchOptions";

import {db} from "../../config";
let productsRef = db.ref("/Products");

class Store extends React.Component {

    state = ({
        cartItems: [],
        shopItems: []
    })

    componentDidMount = async () => {
        productsRef.on("value", async snapshot => {
            let data = snapshot.val();
            if (data !== undefined && data !== null) {
                let products = Object.values(data);
                await this.setState({shopItems: products});
            }
        })
    }

    addToCart = (item) => {this.setState({cartItems: [item, ...this.state.cartItems]})}
    removeFromCart = (id) => {this.setState({cartItems: this.state.cartItems.filter(item => item.id !== id )})}

    renderProductItem = (item) => {
        console.log(item);
        return(
                <ProductItem 
                    key={item.id}
                    title={item.name} 
                    description={item.description}
                    photo={item.image}
                    price={item.price}
                    addToCart = {() => this.addToCart(item)}
                />
        )
    }

    render() {
        const {cartItems, shopItems} = this.state;
        return(
            <div className="store">
                <UpperBar cartItems={cartItems} removeFromCart={this.removeFromCart}/>
                <div className="store__content">
                    <SearchOptions/>
                    {shopItems.map( (item) => {
                        return this.renderProductItem(item);
                    })}
                </div>
            </div>
        );
    }
}

export default Store;