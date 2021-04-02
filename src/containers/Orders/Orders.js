import React, { Component } from 'react';
import { connect } from 'react-redux';

import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';

import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';

class Orders extends Component {
    componentDidMount() {
        this.props.onFetchOrders();
    }
    
    render() {
        const orders = this.props.loading ? 
            <Spinner /> :
            this.props.orders.map(order => (
                <Order 
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price} 
                />)
            ) 
        return orders;
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(actions.fetchOrders())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));