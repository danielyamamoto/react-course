import React, { Component } from 'react';  
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    ingredientHandler = (sign, type) => {
        const oldCount = this.state.ingredients[type];

        if(oldCount <= 0 && sign === "less") {
            return;
        }

        const updatedCounted = sign === "more" ? oldCount + 1 : oldCount - 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCounted;
        const priceIngredient = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = sign === "more" ? oldPrice + priceIngredient : oldPrice - priceIngredient;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }
    
    addIngredientHandler = (sign, type) => {
        this.ingredientHandler(sign, type);
    }

    removeIngredientHandler = (sign, type) => {
        this.ingredientHandler(sign, type);
    }

    render() {
        const disabledInfo = {...this.state.ingredients};

        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;