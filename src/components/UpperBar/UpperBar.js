import "./UpperBar.style.scss"
import React from "react";
import CartIcon from "../../assets/shoppingCart.png"
import {Link} from "react-router-dom";

class UpperBar extends React.Component {

    state = ({
        displayCartItems: false
    })

    showCartItems = () => {
        this.setState({displayCartItems: !this.state.displayCartItems})
    }

    sumPrices = () => {
        let sum = 0;
        this.props.cartItems.map(item => {
            sum += item.price;
        })

        return sum;
    }

    render () {
        const {displayCartItems} = this.state;
        return(
            <div className="upperBar">
                <Link to="/" style={{textDecoration: "none"}}><h1 className="upperBar__title">MateStore</h1></Link>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Leaf_icon_15.svg/1003px-Leaf_icon_15.svg.png" width="40" height="40"/>
                <div className="upperBar__buttons">
                    <button className="upperBar__buttons__button">Login</button>
                    <button className="upperBar__buttons__button">Sign Up</button>
                    <button className="upperBar__buttons__cartButton" onClick={this.showCartItems}>
                    Your Cart
                    {<>
                        <img className="upperBar__cartIcon" src={CartIcon}/>
                        <div className="upperBar__counter">{this.props.cartItems.length}</div>
                    </>}
                    </button>
                    {displayCartItems ? 
                        <div className="upperBar__cart">
                            {this.props.cartItems.map(item => {
                                console.log(item);
                                return(
                                    <div className="upperBar__cart__item">
                                    <button onClick={() => this.props.removeFromCart(item.id)} style={{marginRight: 10}}>X</button>
                                        {item.name} 
                                        {item.price}
                                    </div>
                                )
                            })}
                            <div className="upperBar__cart__totalPrice">Total price: {this.sumPrices()}EUR</div>
                            <button className="upperBar__cart__submit">Buy</button>
                        </div>
                        : null}
                </div>
            </div>
        );
    }
}

export default UpperBar;