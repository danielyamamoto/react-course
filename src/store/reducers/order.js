import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    orders: [],
    loading: false,
    purchased: false 
};

const purchasedInit = (state, action) => {
    return updateObject(state, {purchased: false});
};

const purchasedStart = (state, action) => {
    return updateObject(state, {loading: true})
};

const purchasedSuccess = (state, action) => {
    const newOrder = updateObject(action.orderData, {id: action.orderId});
    return updateObject(state, {
        loading: false,
        purchased: true,
        order: state.orders.concat(newOrder)
    });
};

const purchasedFailed = (state, action) => {
    return updateObject(state, {loading: false})
};

const fetchOrdersStart = (state, action) => {
    return updateObject(state, {loading: true})
};

const fetchOrdersSuccess = (state, action) => {
    return updateObject(state, {
        orders: action.orders,
        loading: false
    });
};

const fetchOrdersFailed = (state, action) => {
    return updateObject(state, {loading: false});
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PURCHASE_INIT: return purchasedInit(state, action);
        case actionTypes.PURCHASE_BURGER_START: return purchasedStart(state, action);
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchasedSuccess(state, action);
        case actionTypes.PURCHASE_BURGER_FAILED: return purchasedFailed(state, action);
        case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart(state, action);
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess(state, action);
        case actionTypes.FETCH_ORDERS_FAILED: return fetchOrdersFailed(state, action);
        default: return state;
    }
};

export default reducer;