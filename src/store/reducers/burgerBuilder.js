import * as actionsTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const addIngredient = (state, action) => {
    const updateIngredientAdd = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1}
    const updateIngredientsAdd = updateObject(state.ingredients, updateIngredientAdd);
    const updateStateAdd = {
        ingredients: updateIngredientsAdd,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    }
    return updateObject(state, updateStateAdd);
};

const removeIngredient = (state, action) => {
    const updateIngredientRemove = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1}
    const updateIngredientsRemove = updateObject(state.ingredients, updateIngredientRemove);
    const updateStateRemove = {
        ingredients: updateIngredientsRemove,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
    }
    return updateObject(state, updateStateRemove);
};

const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: action.ingredients,
        totalPrice: 4,
        error: false
    });
};

const fetchIngredientsFailed = (state, action) => {
    return updateObject(state, {error: true});
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionsTypes.ADD_INGREDIENT: return addIngredient(state, action);
        case actionsTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionsTypes.SET_INGREDIENTS: return setIngredients(state, action);
        case actionsTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);
        default: return state;
    }
};

export default reducer;