import React from "react";
import './AdminPage.style.scss'; 
import UpperBar from "../../components/UpperBar/UpperBar"

class AdminPage extends React.Component {

    state = {
        chosenOption: 0,
        products: [],
        users: []
    }

    viewProducts = () => {this.setState({chosenOption: 0});}

    viewUsers = () => {this.setState({chosenOption: 1});}

    renderWelcomePrompt = () => {
        return (
            <h1 className="adminPage__welcomePrompt">
                Welcome! What do you want to do today?
            </h1>
        )
    }

    renderProducts = () => {
        return (
            <div className="adminPage__productsList">
            <button>Add New Product</button>
                <div className="adminPage__productsList__product">Product1</div>
                <div className="adminPage__productsList__product">Product1</div>
                <div className="adminPage__productsList__product">Product1</div>
                <div className="adminPage__productsList__product">Product1</div>
                <div className="adminPage__productsList__product">Product1</div>
            </div>
        )
    }

    renderUserAccounts = () => {
        return (
            <div className="adminPage__usersList">
                <div className="adminPage__usersList__user">User1<button>Block User</button><button>Remove User</button></div>
                <div className="adminPage__usersList__user">User1<button>Block User</button></div>
                <div className="adminPage__usersList__user">User1<button>Block User</button></div>
                <div className="adminPage__usersList__user">User1<button>Block User</button></div>
                <div className="adminPage__usersList__user">User1<button>Block User</button></div>
                <div className="adminPage__usersList__user">User1<button>Block User</button></div>
            </div>
        )
    }

    render () {
        const {chosenOption} = this.state;
        return (
            <>
            <UpperBar cartItems={[]}/>
            <div className="adminPage">
                <div className="adminPage__title">Admin Page</div>
                <div className="adminPage__currentAction">
                {
                    chosenOption === 0 ? this.renderProducts() : 
                    chosenOption === 1 ? this.renderUserAccounts(): null
                }
                </div>
                <div className="adminPage__actionsMenu">
                    <button onClick={this.viewProducts} className="adminPage__actionsMenu__actionButton">Products</button>
                    <button onClick={this.viewUsers} className="adminPage__actionsMenu__actionButton">User Accounts</button>
                </div>
            </div>
            </>
        )
    }
}

export default AdminPage;