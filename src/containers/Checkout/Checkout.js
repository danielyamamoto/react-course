import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueddHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {

        const purchasedRedirect = this.props.purchased ? <Redirect to='/' /> : null;
        const summary = this.props.ings ? (
            <div>
                {purchasedRedirect}
                <CheckoutSummary 
                    ingredients={this.props.ings}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinueddHandler} 
                /> 
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    component={ContactData} 
                />
            </div>) :
            <Redirect to='/' />;

        return summary;
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
};

export default connect(mapStateToProps)(Checkout);