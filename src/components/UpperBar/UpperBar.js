import "./UpperBar.style.scss"
import React from "react";
import CartIcon from "../../assets/shoppingCart.png"

class UpperBar extends React.Component {

    state = ({

    })

    render () {
        return(
            <div className="upperBar">
                <h1 className="upperBar__title">MateStore</h1>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Leaf_icon_15.svg/1003px-Leaf_icon_15.svg.png" width="40" height="40"/>
                <div className="upperBar__buttons">
                    <button className="upperBar__buttons__button">Login</button>
                    <button className="upperBar__buttons__button">Sign Up</button>
                    <button className="upperBar__buttons__cartButton">
                    Your Cart
                    {<>
                        <img className="upperBar__cart" src={CartIcon}/>
                        <div className="upperBar__counter">0</div>
                    </>}
                    </button>
                </div>
            </div>
        );
    }
}

export default UpperBar;