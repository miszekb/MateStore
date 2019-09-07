import React from "react";
import './AdminPage.style.scss'; 
import UpperBar from "../../components/UpperBar/UpperBar";
import shortid from 'shortid';

import {db} from "../../config";
let productsRef = db.ref("/Products");

class AdminPage extends React.Component {

    state = {
        chosenOption: 0,
        products: [],
        users: [],

        activateForm: false,
        newProductName: "",
        newProductImg: "",
        newProductDesc: "",
        newProductPrice: 0
    }

    componentDidMount = () => {
        productsRef.on("value", snapshot => {
            let data = snapshot.val();
            if (data !== undefined && data !== null) {
                let Products = Object.values(data);
                this.setState({products: Products});
            }
        })
    }

    addProduct = () => {
        const {newProductName, newProductDesc, newProductImg, newProductPrice} = this.state;

        const product = {
            id: shortid.generate(),
            name: newProductName, 
            description: newProductDesc,
            price: newProductPrice,
            image: newProductImg
        }
        this.setState({
            products: [product, ...this.state.products]
        })
        db.ref('/Products').child(product.id).set(product);
        this.setState({newProductName: "", newProductDesc: "", newProductImg: ""});
    }

    removeProduct = (id) => {
        this.setState({ products : this.state.products.filter((product) => product.id !== id )})
        db.ref('/Products').child(id).remove();
    }

    viewProducts = () => {this.setState({chosenOption: 0});}
    viewUsers = () => {this.setState({chosenOption: 1});}
    viewForm = () => {this.setState({activateForm: true})}
    hideForm = () => {this.setState({activateForm: false})}

    renderForm = () => {
        const {newProductName, newProductDesc, newProductImg, newProductPrice} = this.state;
        return (
            <div className="adminPage__productList__form">
                <input 
                    type="text" 
                    placeholder="Name" 
                    onChange={evt => this.setState({newProductName: evt.target.value})}
                    value={newProductName}    
                />
                <input 
                    type="text" 
                    placeholder="Description" 
                    onChange={evt => this.setState({newProductDesc: evt.target.value})}
                    value={newProductDesc}
                />
                 <input 
                    type="number" 
                    placeholder="Price" 
                    onChange={evt => this.setState({newProductPrice: evt.target.value})}
                    value={newProductPrice}    
                />
                <input 
                    type="text" 
                    placeholder="Image URL" 
                    onChange={evt => this.setState({newProductImg: evt.target.value})}
                    value={newProductImg}    
                />
                <button onClick={this.addProduct}>Submit</button>
                <button onClick={this.hideForm}>Quit</button>
            </div>
        )
    }

    renderProducts = () => {
        const {activateForm, products} = this.state;
        return (
            <div className="adminPage__productsList">
                {activateForm ? this.renderForm() :
                    <button onClick={this.viewForm}>Add New Product</button>
                }
                {products.map(item => {
                    return(
                        <div className="adminPage__productsList__product">
                            <img src={item.image} width="90" height="90" style={{marginRight: 10}}></img>
                            {item.name}
                            <p>{item.description}</p>
                            <button onClick={() => this.removeProduct(item.id)}className="adminPage__productsList__removeButton">Remove</button>
                        </div>
                    )
                })}
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