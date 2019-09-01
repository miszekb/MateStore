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

    renderProductItem = (item) => {
        console.log(item);
        return(
            <>
                <ProductItem 
                item={item}
                title="Yerba Mate 250g" 
                description="Mmm pyszna yerbka mniam mniam polecam Mateusz Borek" 
                photo="https://image.ceneostatic.pl/data/products/7374914/i-argentyna-limited-500g-el-gaucho-argentina-yerba-mate.jpg"
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
                        title="Yerba Mate 250g" 
                        description="Mmm pyszna yerbka mniam mniam polecam Mateusz Borek" 
                        photo="https://image.ceneostatic.pl/data/products/7374914/i-argentyna-limited-500g-el-gaucho-argentina-yerba-mate.jpg"
                    />
                    <ProductItem 
                        title="Yerba Mate 250g" 
                        description="Mmm pyszna yerbka mniam mniam polecam Mateusz Borek" 
                        photo="https://image.ceneostatic.pl/data/products/7374914/i-argentyna-limited-500g-el-gaucho-argentina-yerba-mate.jpg"
                    />
                    <ProductItem 
                        title="Yerba Mate 250g" 
                        description="Mmm pyszna yerbka mniam mniam polecam Mateusz Borek" 
                        photo="https://image.ceneostatic.pl/data/products/7374914/i-argentyna-limited-500g-el-gaucho-argentina-yerba-mate.jpg"
                    />
                    <ProductItem 
                        title="Yerba Mate 250g" 
                        description="Mmm pyszna yerbka mniam mniam polecam Mateusz Borek" 
                        photo="https://image.ceneostatic.pl/data/products/7374914/i-argentyna-limited-500g-el-gaucho-argentina-yerba-mate.jpg"
                    />
                    <ProductItem 
                        title="Yerba Mate 250g" 
                        description="Mmm pyszna yerbka mniam mniam polecam Mateusz Borek" 
                        photo="https://image.ceneostatic.pl/data/products/7374914/i-argentyna-limited-500g-el-gaucho-argentina-yerba-mate.jpg"
                    />
                    <ProductItem 
                        title="Yerba Mate 250g" 
                        description="Mmm pyszna yerbka mniam mniam polecam Mateusz Borek" 
                        photo="https://image.ceneostatic.pl/data/products/7374914/i-argentyna-limited-500g-el-gaucho-argentina-yerba-mate.jpg"
                    />
                    <ProductItem 
                        title="Yerba Mate 250g" 
                        description="Mmm pyszna yerbka mniam mniam polecam Mateusz Borek" 
                        photo="https://image.ceneostatic.pl/data/products/7374914/i-argentyna-limited-500g-el-gaucho-argentina-yerba-mate.jpg"
                    />
                    <ProductItem 
                        title="Yerba Mate 250g" 
                        description="Mmm pyszna yerbka mniam mniam polecam Mateusz Borek" 
                        photo="https://image.ceneostatic.pl/data/products/7374914/i-argentyna-limited-500g-el-gaucho-argentina-yerba-mate.jpg"
                    />
                    <ProductItem 
                        title="Yerba Mate 250g" 
                        description="Mmm pyszna yerbka mniam mniam polecam Mateusz Borek" 
                        photo="https://image.ceneostatic.pl/data/products/7374914/i-argentyna-limited-500g-el-gaucho-argentina-yerba-mate.jpg"
                    />
                    <ProductItem 
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