import React from 'react';

import classes from './Order.module.scss';

const order = props => {
    const ingredients = [];

    for(let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amout: props.ingredients[ingredientName]
        });
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span key={ig.name}>{ig.name} ({ig.amout})</span>;
    });

    return (
        <div className={classes.order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    );
};

export default order;