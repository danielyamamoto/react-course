import React from 'react';
import classes from '../../../assets/css/style.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = props => (
    <div className={classes.buildControls}>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                added={() => props.ingredientAdded("more", ctrl.type)}
                removed={() => props.ingredientRemoved("less", ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
    </div>
);

export default buildControls;