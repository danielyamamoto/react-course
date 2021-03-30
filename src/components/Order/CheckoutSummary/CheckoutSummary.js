import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.scss';

const checkoutSummary = props => {
    return(
        <div className={classes.checkoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="button__danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="button__success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;