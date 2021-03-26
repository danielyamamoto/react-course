import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize', fontWeight: 'bold'}}>
                    {igKey}
                </span>
                :&nbsp;{props.ingredients[igKey]}
            </li>
        );
    });

    return(
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price</strong>:&nbsp;{props.price.toFixed(2)}</p>
            <p>Continue to checkout?</p>
            <Button btnType="button__danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="button__success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )
};

export default orderSummary;