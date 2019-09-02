import React from "react";
import './Store.style.scss'; 
import UpperBar from "../../components/UpperBar/UpperBar";
import ProductItem from "../../components/ProductItem/ProductItem";
import SearchOptions from "../../components/SearchOptions/SearchOptions";

class Store extends React.Component {

    state = ({
        cartItems: [],
        shopItems: []
    })

    //just for testing
    componentDidMount = async () => {
        let bufferArray = [];
        for(let i=0;i<15;i++) {
            bufferArray.push(i);
        }

        await this.setState({shopItems: bufferArray})
    }

    getItemsList = () => {
        this.state.shopItems.map( (item) => {
            this.renderProductItem(item);
        })
    }

    addToCart = (item) => {
        this.setState({
            cartItems: [item, ...this.state.cartItems]
        })
    }

    renderProductItem = (item) => {
        console.log(item);
        return(
            <>
                <ProductItem 
                key={item.id}
                title="Yerba Mate 250g" 
                description="Mmm pyszna yerbka mniam mniam polecam Mateusz Borek" 
                photo="https://image.ceneostatic.pl/data/products/7374914/i-argentyna-limited-500g-el-gaucho-argentina-yerba-mate.jpg"
                addToCart = {() => this.addToCart(item.id)}
                />
            </>
        )
    }

    render() {
        const {cartItems} = this.state;
        return(
            <div className="store">
                <UpperBar cartItems={cartItems}/>
                <div className="store__content">
                    <SearchOptions/>
                    {this.getItemsList()}
                    <ProductItem
                        key="1" 
                        title="Yerba Mate 250g" 
                        description="Mmm pyszna yerbka mniam mniam polecam Mateusz Borek" 
                        photo="https://image.ceneostatic.pl/data/products/7374914/i-argentyna-limited-500g-el-gaucho-argentina-yerba-mate.jpg"
                        addToCart = {() => this.addToCart("1")}
                    />
                    <ProductItem
                        key="2"  
                        title="Yerba Mate 250g" 
                        description="Mmm pyszna yerbka mniam mniam polecam Mateusz Borek" 
                        photo="https://image.ceneostatic.pl/data/products/7374914/i-argentyna-limited-500g-el-gaucho-argentina-yerba-mate.jpg"
                        addToCart = {() => this.addToCart("2")}
                    />
                    <ProductItem
                        key="3"  
                        title="Yerba Mate 250g" 
                        description="Mmm pyszna yerbka mniam mniam polecam Mateusz Borek" 
                        photo="https://image.ceneostatic.pl/data/products/7374914/i-argentyna-limited-500g-el-gaucho-argentina-yerba-mate.jpg"
                        addToCart = {() => this.addToCart("3")}
                    />
                    <ProductItem
                        key="4" 
                        title="Yerba Mate 250g" 
                        description="Mmm pyszna yerbka mniam mniam polecam Mateusz Borek" 
                        photo="https://image.ceneostatic.pl/data/products/7374914/i-argentyna-limited-500g-el-gaucho-argentina-yerba-mate.jpg"
                        addToCart = {() => this.addToCart("4")}
                    />
                    <ProductItem
                        key="5"  
                        title="Yerba Mate 250g" 
                        description="Mmm pyszna yerbka mniam mniam polecam Mateusz Borek" 
                        photo="https://image.ceneostatic.pl/data/products/7374914/i-argentyna-limited-500g-el-gaucho-argentina-yerba-mate.jpg"
                    />
                    <ProductItem
                        key="6"  
                        title="Yerba Mate 250g" 
                        description="Mmm pyszna yerbka mniam mniam polecam Mateusz Borek" 
                        photo="https://image.ceneostatic.pl/data/products/7374914/i-argentyna-limited-500g-el-gaucho-argentina-yerba-mate.jpg"
                    />
                    <ProductItem
                        key="7" 
                        title="Yerba Mate 250g" 
                        description="Mmm pyszna yerbka mniam mniam polecam Mateusz Borek" 
                        photo="https://image.ceneostatic.pl/data/products/7374914/i-argentyna-limited-500g-el-gaucho-argentina-yerba-mate.jpg"
                    />
                    <ProductItem
                        key="8"  
                        title="Yerba Mate 250g" 
                        description="Mmm pyszna yerbka mniam mniam polecam Mateusz Borek" 
                        photo="https://image.ceneostatic.pl/data/products/7374914/i-argentyna-limited-500g-el-gaucho-argentina-yerba-mate.jpg"
                    />
                    <ProductItem
                        key="9"  
                        title="Yerba Mate 250g" 
                        description="Mmm pyszna yerbka mniam mniam polecam Mateusz Borek" 
                        photo="https://image.ceneostatic.pl/data/products/7374914/i-argentyna-limited-500g-el-gaucho-argentina-yerba-mate.jpg"
                    />
                </div>
            </div>
        );
    }
}

export default Store;